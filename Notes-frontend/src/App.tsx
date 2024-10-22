import "./App.css";
import { Textarea } from "@/components/ui/textarea";
import { MagicCard } from "./components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axois from "axios";

interface Notes {
  title: string;
  description: string;
  createdAt: string;
  _id: string;
}
function App() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [notes, setNotes] = useState<Notes[]>([]);
  async function AddNotes() {
    const response = await axois.post("http://localhost:3000/api/v1/add", {
      title,
      description,
    });
    if (response) {
      console.log("Notes added SucessFully");

      getNotes();
    }
  }
  async function getNotes() {
    const response = await axois.get("http://localhost:3000/api/v1/notes");

    const data = response.data.res;
    setNotes(data);
    console.log(data);
  }
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <div className="flex gap-11">
        <div className="w-72 mt-6 ml-8 ">
          <p className="text-2xl">Take Down Your Notes</p>
          <div className=" my-3 rounded-lg">
            <Input
              placeholder="Title"
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="my-5  ">
            <Textarea
              placeholder="Get your description Right"
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <Button onClick={AddNotes}> Add Notes</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
          {notes.map(note => (
            <div className="h-[250px] w-72 md:w-96 mx-4  gap-2" key={note._id}>
              <MagicCard
                className=" cursor-pointer shadow-xl whitespace-nowrap justify-between "
                gradientColor="#262626"
              >
                
                  <div className="mt-3 ml-2 text-3xl font-semibold">
                    {note.title}
                  </div>
                  <div className="ml-2 my-4 text-lg">{note.description}</div>
    
                <div className="absolute inset-x-0 bottom-0 text-gray-500">Created On: {note.createdAt.split("T")[0]}</div>
              </MagicCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
