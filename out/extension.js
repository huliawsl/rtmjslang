"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const vscode_1 = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "rtmjsmaker" is now active!');
    let disposable = vscode.commands.registerCommand("rtmjsmaker.helloWorld", () => {
        vscode.window.showInformationMessage("Hello World from RTMJSMAKER!");
    });
    context.subscriptions.push(disposable);
    //补全
    vscode.languages.registerCompletionItemProvider("javascript", {
        provideCompletionItems(document, position, token, context) {
            return [
                {
                    detail: "rtm",
                    kind: vscode_1.CompletionItemKind.Value,
                    label: "renderer",
                },
                {
                    detail: "rtm|registered object",
                    kind: vscode_1.CompletionItemKind.Value,
                    label: "registerParts",
                },
                {
                    detail: "rtm|pantograph_front",
                    kind: vscode_1.CompletionItemKind.Value,
                    label: "pantograph_F",
                },
                {
                    detail: "load package",
                    kind: vscode_1.CompletionItemKind.Value,
                    label: "importPackage",
                },
                {
                    detail: "rtm|function",
                    kind: vscode_1.CompletionItemKind.Function,
                    label: "sigmoid",
                },
                {
                    detail: "rtm",
                    kind: vscode_1.CompletionItemKind.Value,
                    label: "entity",
                },
                {
                    detail: "rtm|opengl",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "GL11",
                },
                {
                    detail: "rtm|Save and recall current position",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "glPushMatrix()",
                },
                {
                    detail: "rtm|Save and recall current position",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "glPopMatrix()",
                },
                {
                    detail: "rtm|rotate",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "rotate",
                },
                {
                    detail: "rtm|Translation",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "glTranslatef()",
                },
                {
                    detail: "rtm|rotate",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "glRotatef()",
                },
                {
                    detail: "rtm",
                    kind: vscode_1.CompletionItemKind.Value,
                    label: "render",
                },
                {
                    detail: "rtm|Will be called every tick",
                    kind: vscode_1.CompletionItemKind.Value,
                    label: "su",
                },
                {
                    detail: "rtm|get speed",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "getSpeed()",
                },
                {
                    detail: "rtm|get notch",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "getNotch()",
                },
                {
                    detail: "rtm|get state",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "getState()",
                },
                {
                    detail: "rtm|get pantograph state",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "getPantographMovementFront()",
                },
                {
                    detail: "rtm|get door state",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "getDoorMovementL()",
                },
                {
                    detail: "rtm|get door state",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "getDoorMovementR()",
                },
                {
                    detail: "rtm|get model name",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "getModelName()",
                },
                {
                    detail: "rtm|Vehicle render class",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "jp.ngt.rtm.render.VehiclePartsRenderer",
                },
                {
                    detail: "rtm|Rail render class",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "jp.ngt.rtm.render.RailPartsRenderer",
                },
                {
                    detail: "rtm|Machine render class",
                    kind: vscode_1.CompletionItemKind.Method,
                    label: "jp.ngt.rtm.render.MachinePartsRenderer",
                }
            ];
        },
    }, " ");
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map