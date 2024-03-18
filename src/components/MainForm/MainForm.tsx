"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { commitTypes } from "./commitTypes";

export const MainForm = () => {
  const [form, setForm] = useState({
    type: "",
    system: "",
    title: "",
    description: "",
    cardNumber: "",
  });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const msg = `${form.type}(${form.system}): ${form.title}<br />
    ${form.description}<br />
    Jira Ticket [ ${form.cardNumber}](https://vistosystem.atlassian.net/browse/${form.cardNumber})`;
    setMsg(msg);
    console.log(msg);
  };

  return (
    <div>
      <form
        className="flex gap-2 p-2 flex-col"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Select
          onValueChange={(value: any) => setForm({ ...form, type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(commitTypes).map((type) => (
              <SelectItem value={type} key={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="text"
          name="system"
          placeholder="Sistema"
          required
          onChange={(e) => setForm({ ...form, system: e.target.value })}
        />
        <Input
          type="text"
          name="title"
          placeholder="Título"
          required
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Textarea
          placeholder="Descrição"
          name="description"
          required
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <Input
          type="text"
          name="cardNumber"
          placeholder="Card"
          required
          onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
        />
        <Button type="submit">Gerar mensagem formatada</Button>
      </form>
    </div>
  );
};
