import { useState } from "react";

//Lấy thông tin từ Form người dùng
export function useFormInfo(initialState) {
  const [info, setValues] = useState(initialState);

  return [
    info,
    function(event) {
      setValues({
        ...info,
        [event.target.id]: event.target.value
      });
    }
  ];
}