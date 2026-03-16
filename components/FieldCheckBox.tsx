import { useField, useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";

import type { WithClassNames, LabelDescription, ValidateProps } from "./type";

import { Field, FieldContent, FieldGroup, FieldLabel } from "@components/ui/field";
import { cn } from "@components/ui/utils";
import { Checkbox } from "@components/custom/checkbox";
import FieldErrorMessage from "./shared/FieldErrorMessage";

type FieldSelectProps = LabelDescription &
  React.ComponentProps<typeof Checkbox> & {
    validate?: ValidateProps;
  } & WithClassNames<"label" | "description" | "selectTriger" | "field" | "validate">;

export default function FieldCheckBox({ label, classNames, validate, className, ...checkbox }: FieldSelectProps) {
  const { form, name } = useFieldContext<string[]>();
  const field = useField({ mode: "array", name, form });
  const errors = useStore(field.store, state => state.meta.errors);
  // const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const isInvalid = errors.length > 0;

  return (
    <Field data-invalid={isInvalid} className={cn(``, className, classNames?.field)}>
      <Checkbox {...checkbox} id={field.name} className={cn(`peer cursor-pointer`)} />
      <FieldContent>
        <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
        <FieldErrorMessage className={cn(classNames?.validate)} {...validate} />
      </FieldContent>
    </Field>
  );
}
