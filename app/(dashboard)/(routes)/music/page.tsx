"use client"

import { Heading } from "@/components/heading";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";

import axios from "axios"
import * as z from "zod";
import {formSchema} from "./constants"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/loader";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

const MusicPage = () => {
  const router = useRouter();
  // const proModal = useProModal();
  const [music, setMusic] = useState<"" | null>();;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });


    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        setMusic(undefined);
  
        const response = await axios.post('/api/music', values);
        console.log(response)
  
        setMusic(response.data.audio);
        form.reset();
    
        } catch(error: any) {
          //TODO: Open pro model
          toast.error("Somethink went wrong");
        } finally{
           router.refresh();
        }
    };

    return (
        <div>
          <Heading 
            title="Music Generation"
            description="Bring your creativity to existence by our ProTalk music genrative AI"
            icon={Music}
            iconColor="text-emerald-600"
            bgColor="bg-emerald-600/10"/>
          <div className="px-4 lg:px-4">
                <div>
                  <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)} 
                     className="
                     rounded-lg
                     border
                     w-full
                     p-4
                     px-3
                     md:px-6
                     focus-within:shadow-sm
                     grid
                     grid-cols-12
                     gap-2
                     ">
                    <FormField
                      name="prompt"
                      render={({field}) =>(
                        <FormItem className="col-span-12 lg:col-span-10">
                            <FormControl className="m-0 p-0">
                                <Input
                                className="border-0 outline-none
                                focus-visible:ring-0
                                focus-visible:ring-transparent"
                                disabled={isLoading}
                                placeholder="Enter your music"
                                {...field}
                                />
                            </FormControl>
                        </FormItem>
                      )}
                    /> 
                    <Button className="col-span-12 lg:col-span-2 w-full" disabled = {isLoading}>
                        Generate
                    </Button>
                     </form>
                  </Form>   
                </div> 
                <div className="space-y-4 mt-4">
                  {isLoading &&(

                    <div className="p-8 rounded-lg w-full flex items-center justify-center">
                       <Loader/>
                    </div>
                    )}
                  {!music && !isLoading && (
                    <Empty lable="No music has generated" />
                  )}
                    {music && (
                        <audio controls className="w-full mt-8">
                                <source src={music} />
                         </audio>
                              )}
                </div> 
          </div>
        </div>
    );
}

export default MusicPage;