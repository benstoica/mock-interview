import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
}

const FormField = <T extends FieldValues>(props: FormFieldProps<T>) => (
  <Controller
    name={props.name}
    control={props.control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{props.label}</FormLabel>
        <FormControl>
          <Input
            className="input"
            placeholder={props.placeholder}
            type={props.type}
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
