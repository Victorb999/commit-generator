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
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { commitTypes } from "./commitTypes";
import { TooltipInfo } from "../TooltipInfo/TooltipInfo";
import { AlertMessage } from "../AlertMessage/AlertMessage";

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
    const msg = `${form.type}(${form.system}): ${form.title}<br /><br />
    ${form.description}<br /><br />
    Jira Ticket [${form.cardNumber}](https://vistosystem.atlassian.net/browse/${form.cardNumber})`;
    setMsg(msg);
    console.log(msg);
  };

  return (
    <div
      className="flex flex-col
     justify-center items-center w-full h-[100dvh]"
    >
      <Card>
        <CardHeader>
          <CardTitle>Gerador de commit</CardTitle>
          <CardDescription>Gere sua mensagem de commit</CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <form
              className="flex gap-2 p-2 flex-col"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="flex gap-2 items-center">
                <Select
                  onValueChange={(value: any) =>
                    setForm({ ...form, type: value })
                  }
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
                <TooltipInfo
                  msg={
                    form.type !== ""
                      ? commitTypes[form.type as keyof typeof commitTypes]
                      : "O tipo de commit"
                  }
                />
              </div>

              <div className="flex gap-2 items-center">
                <Input
                  type="text"
                  name="system"
                  placeholder="Sistema"
                  required
                  onChange={(e) => setForm({ ...form, system: e.target.value })}
                />
                <TooltipInfo msg={`O sistema que está alterando.`} />
              </div>

              <div className="flex gap-2 items-center">
                <Input
                  type="text"
                  name="titleCommit"
                  placeholder="Título"
                  required
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <TooltipInfo
                  msg={`O título contém uma descrição sucinta da mudança:<br />
-use o imperativo, tempo presente: "mudança" não "mudou" nem "muda"<br />
-não capitalize a primeira letra<br />
-sem ponto (.) no final`}
                />
              </div>

              <div className="flex gap-2 items-center">
                <Textarea
                  placeholder="Descrição"
                  name="descriptionCommit"
                  required
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
                <TooltipInfo
                  msg={`Um corpo de mensagem de commit 
                  mais longo PODE ser fornecido após o título, 
                  fornecendo informações contextuais 
                  adicionais sobre as alterações no código.               
                  Use para explicar "o que" e "porque" foi 
                  realizado essa modificação, ao invez de "como".`}
                />
              </div>
              <div className="flex gap-2 items-center">
                <Input
                  type="text"
                  name="cardNumber"
                  placeholder="Card"
                  required
                  onChange={(e) =>
                    setForm({ ...form, cardNumber: e.target.value })
                  }
                />
                <TooltipInfo msg={`O número do card. (ex: NS-123) `} />
              </div>
              <AlertDialogTrigger
                disabled={
                  !form.type ||
                  !form.system ||
                  !form.title ||
                  !form.description ||
                  !form.cardNumber
                }
              >
                <Button type="submit" className="mt-2">
                  Gerar mensagem
                </Button>
                <AlertMessage msg={msg} />
              </AlertDialogTrigger>
            </form>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
};
