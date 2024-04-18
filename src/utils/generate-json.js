const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '..', 'routes', 'defillama.ts');
const outputJsonPath = path.join(__dirname, '..', 'utils', 'widgets.json');

function parseTsFile(tsFilePath) {
    const content = fs.readFileSync(tsFilePath, 'utf8');
    const lines = content.split('\n');

    const widgets = {};
    let currentEndpoint = "";
    let currentWidgetId = "";

    lines.forEach(line => {
        const endpointMatch = line.match(/fetch\(["`](.+)["`]\)/);

        console.log("got a match")
        console.log(endpointMatch)

        if (endpointMatch) {
            currentEndpoint = endpointMatch[1];
            
            // Remove parameters from endpoint URL and additional placeholders
            const cleanEndpoint = currentEndpoint
                .replace(/\$\{[^}]+\}/g, '') // Remove template literals
                .replace(/\/:[^/]+/g, '') // Remove colon-prefixed path parameters
                .replace(/^https?:\/\/[^\/]+/, '') // Remove protocol and domain
                .replace(/\/$/, ''); // Remove trailing slash
            currentWidgetId = cleanEndpoint.replace(/\//g, '_').replace(/:/g, '');
            widgets[currentWidgetId] = {
                name: currentWidgetId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                description: "",
                category: "crypto",
                searchCategory: "crypto",
                widgetType: "individual",
                widgetId: currentWidgetId,
                endpoint: `/defillama${cleanEndpoint.replace(/\/$/, '')}`, // Clean the URL path
                params: { optional: {} },
                gridData: { w: 40, h: 10 },
                data: { table: { index: "name", showAll: true } }
            };
        
            const paramRegex = /\$\{([^}]+)\}/g;  // Use global flag to match all occurrences
            let match;
            while (match = paramRegex.exec(currentEndpoint)) {
                const paramName = match[1]; // Directly use captured group
                widgets[currentWidgetId].params.optional[paramName] = "string";
            }
        }

        const descriptionMatch = line.match(/\/\/ Description = (.+)/);
        if (descriptionMatch && widgets[currentWidgetId]) {
            widgets[currentWidgetId].description = descriptionMatch[1];
        }

        const indexMatch = line.match(/\/\/ Index = (.+)/);
        if (indexMatch && widgets[currentWidgetId]) {
            widgets[currentWidgetId].data.table.index = indexMatch[1];
        }
    });

    return widgets;
}

function writeJsonFile(widgets, outputPath) {
    fs.writeFileSync(outputPath, JSON.stringify(widgets, null, 2), 'utf8');
    console.log(`Widgets JSON file has been generated at ${outputPath}`);
}

const widgets = parseTsFile(tsFilePath);
writeJsonFile(widgets, outputJsonPath);