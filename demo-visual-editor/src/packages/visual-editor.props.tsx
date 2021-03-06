export enum VisualEditorPropsType {
  input = "input",
  color = "color",
  select = "select",
  table = "table",
}

export interface VisualEditorProps {
  type: VisualEditorPropsType;
  label: string;
  options?: VisualEditorSelectOptions;
  table?: VisualEditorTableOptions;
}

/** ------input------- */

export function createEditorInputProps(label: string): VisualEditorProps {
  return {
    type: VisualEditorPropsType.input,
    label,
  };
}

/** ------color------- */

export function createEditorColorProps(label: string): VisualEditorProps {
  return {
    type: VisualEditorPropsType.color,
    label,
  };
}

/** ------select------- */

export type VisualEditorSelectOptions = {
  label: string;
  val: string;
}[];

export function createEditorSelectProps(
  label: string,
  options: VisualEditorSelectOptions
): VisualEditorProps {
  return {
    type: VisualEditorPropsType.select,
    label,
    options,
  };
}

/** ------table------- */

export type VisualEditorTableOptions = {
  options: {
    label: string;
    field: string; // 列绑定字段
  }[];
  showKey: string;
};

export function createEditorTableProp(
  label: string,
  options: VisualEditorTableOptions
) {
  return {
    type: VisualEditorPropsType.table,
    label,
    table: options,
  };
}
