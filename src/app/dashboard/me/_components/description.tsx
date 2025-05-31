"use client";
import { ChangeEvent, useState, useRef } from "react";
import { debounce } from "lodash";
import { changeDescription } from "../_actions/change-description";
import { toast } from "sonner";

export function Description({
  initialDescription,
}: {
  initialDescription: string;
}) {
  const [description, setDescription] = useState(initialDescription);
  const [originalDescription] = useState(initialDescription);

  const deboucedSaveDescription = useRef(
    debounce(async (currentDescription) => {
      if (currentDescription.trim() === "") {
        setDescription(originalDescription);
        return;
      }

      if (currentDescription !== description) {
        try {
          const response = await changeDescription({
            description: currentDescription,
          });

          if (response.error) {
            toast.error(response.error);
            setDescription(currentDescription);
            return;
          }

          toast.success("Sua BIO foi alterada com sucesso");
        } catch (err) {
          console.log(err);
          setDescription(currentDescription);
        }
      }
    }, 500)
  ).current;

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setDescription(value);

    deboucedSaveDescription(value);
  }

  return (
    <textarea
      className="text-xl md:text-base font-normal bg-gray-50 rounded-md outline-none p-2 w-full max-w-2xl text-center my-3 h-40 resize-none"
      value={description}
      onChange={handleChange}
    />
  );
}
