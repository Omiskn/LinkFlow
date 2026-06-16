import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

type Option = {
  value: string;
  label: string;
};

type FilterProps = {
  queryKey: string;
  placeholder: string;
  options: Option[];
  defaultValue?: string;
};

function Filter({
  queryKey,
  placeholder,
  options,
  defaultValue = "",
}: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentValue =
    searchParams.get(queryKey) ||
    localStorage.getItem(queryKey) ||
    defaultValue;

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams);

    if (value === defaultValue) {
      params.delete(queryKey);
    } else {
      params.set(queryKey, value);
      localStorage.setItem(queryKey, currentValue);
    }

    setSearchParams(params);
  }

  return (
    <Field>
      <Select value={currentValue} onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}

export default Filter;
