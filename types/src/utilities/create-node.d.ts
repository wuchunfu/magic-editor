import { ResolvedPos } from "prosemirror-model";
import { EditorState, Transaction } from "prosemirror-state";
export declare function atTheEndOfDoc(state: EditorState): boolean;
export declare function atTheBeginningOfDoc(state: EditorState): boolean;
export declare function atTheEndOfBlock(state: EditorState): boolean;
export declare function endPositionOfParent(resolvedPos: ResolvedPos): number;
export declare function canMoveUp(state: EditorState): boolean;
export declare function canMoveDown(state: EditorState): boolean;
export declare function preventDefault(): () => boolean;
export declare function insertNewLine(): (state: any, dispatch: any) => boolean;
export declare const createNewParagraphAbove: (state: any, dispatch: any) => boolean;
export declare const createNewParagraphBelow: (state: any, dispatch: any) => boolean;
export declare function createParagraphNear(append?: boolean): (state: any, dispatch: any) => boolean;
export declare function addParagraphAtEnd(tr: Transaction): void;
export declare function createParagraphAtEnd(): (state: any, dispatch: any) => boolean;