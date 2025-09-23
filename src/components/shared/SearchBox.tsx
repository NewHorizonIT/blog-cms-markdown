import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { OptionSelect } from "@/types";

const SearchBox = ({
  options = [],
  onSearch,
  onChange,
  valueInput,
}: {
  options?: OptionSelect[];
  onSearch: (e: React.KeyboardEvent) => void;
  valueInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 my-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Tìm kiếm bài viết..."
          className="pl-10"
          value={valueInput}
          onChange={onChange}
          onKeyDown={onSearch}
        />
      </div>
      {options.length === 0 ? (
        <></>
      ) : (
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Lọc theo trạng thái" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem value={option.value} key={option.label}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default SearchBox;
