export type ValidationRule = (value: string) => string | null;

export interface FieldSchema {
  name: string;
  label: string;
  initialValue?: string;
  validations?: ValidationRule[];
}

export interface SmartFormProps {
  schema: FieldSchema[];
  onSubmit: (data: Record<string, string>) => void;
}
