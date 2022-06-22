import * as vscode from "vscode";
import {
  CompletionItemKind,
  TextDocument,
  Position,
  CancellationToken,
  CompletionContext,
} from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "rtmjsmaker" is now active!');

  let disposable = vscode.commands.registerCommand(
    "rtmjsmaker.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from RTMJSMAKER!");
    }
  );

  context.subscriptions.push(disposable);

  //补全
  vscode.languages.registerCompletionItemProvider(
    "javascript",
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
      ) {
        return [
          {
            detail: "rtm",
            kind: CompletionItemKind.Value,
            label: "renderer",
          },
          {
            detail: "rtm|registered object",
            kind: CompletionItemKind.Value,
            label: "registerParts",
          },
          {
            detail: "rtm|pantograph_front",
            kind: CompletionItemKind.Value,
            label: "pantograph_F",
          },

          {
            detail: "load package",
            kind: CompletionItemKind.Value,
            label: "importPackage",
          },
          {
            detail: "rtm|function",
            kind: CompletionItemKind.Function,
            label: "sigmoid",
          },
          {
            detail: "rtm",
            kind: CompletionItemKind.Value,
            label: "entity",
          },
          {
            detail: "rtm|opengl",
            kind: CompletionItemKind.Method,
            label: "GL11",
          },
          {
            detail: "rtm|Save and recall current position",
            kind: CompletionItemKind.Method,
            label: "glPushMatrix()",
          },
          {
            detail: "rtm|Save and recall current position",
            kind: CompletionItemKind.Method,
            label: "glPopMatrix()",
          },
          {
            detail: "rtm|rotate",
            kind: CompletionItemKind.Method,
            label: "rotate",
          },
          {
            detail: "rtm|Translation",
            kind: CompletionItemKind.Method,
            label: "glTranslatef()",
          },
          {
            detail: "rtm|rotate",
            kind: CompletionItemKind.Method,
            label: "glRotatef()",
          },
          {
            detail: "rtm",
            kind: CompletionItemKind.Value,
            label: "render",
          },
          {
            detail: "rtm|Will be called every tick",
            kind: CompletionItemKind.Value,
            label: "su",
          },
          {
            detail: "rtm|get speed",
            kind: CompletionItemKind.Method,
            label: "getSpeed()",
          },
          {
            detail: "rtm|get notch",
            kind: CompletionItemKind.Method,
            label: "getNotch()",
          },
          {
            detail: "rtm|get state",
            kind: CompletionItemKind.Method,
            label: "getState()",
          },
          {
            detail: "rtm|get pantograph state",
            kind: CompletionItemKind.Method,
            label: "getPantographMovementFront()",
          },
          {
            detail: "rtm|get door state",
            kind: CompletionItemKind.Method,
            label: "getDoorMovementL()",
          },
          {
            detail: "rtm|get door state",
            kind: CompletionItemKind.Method,
            label: "getDoorMovementR()",
          },
          {
            detail: "rtm|get model name",
            kind: CompletionItemKind.Method,
            label: "getModelName()",
          },
          {
            detail: "rtm|Vehicle render class",
            kind: CompletionItemKind.Method,
            label: "jp.ngt.rtm.render.VehiclePartsRenderer",
          },
          {
            detail: "rtm|Rail render class",
            kind: CompletionItemKind.Method,
            label: "jp.ngt.rtm.render.RailPartsRenderer",
          },
          {
            detail: "rtm|Machine render class",
            kind: CompletionItemKind.Method,
            label: "jp.ngt.rtm.render.MachinePartsRenderer",
          }
        ];
      },
    },
    " "
  );
  
}
export function deactivate() {}
