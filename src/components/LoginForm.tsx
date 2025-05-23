import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { supabase } from "../scripts/client"

// define shape of form data
const formSchema = z.object({
  email: z.string().email("Invalid email address!"),
  password: z.string()
})


export const LoginForm = () => {
  const navigate = useNavigate();

  // define form
  // a form resolver bridges schema validation and the form itself
  // here we're creating a resolver from the schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const { setError, formState: { errors } } = form // grab function used to set form error message

  // define submit handler
  // here we send the data to backend, etc.
  function onSubmit(values: z.infer<typeof formSchema>) {
    async function signIn() {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password
      })

      if (error) {
        setError("root", {
          message: error.message
        });
      } else {
        navigate("/")
      }
    }

    signIn();
  }

  // lastly define the actual form body!
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-left justify-center space-y-4 w-60">

        {/* a single field */}
        <FormField
          control={form.control} // connect this field to react-hook-form state management 
          name="email"
          // this actually defines how input will be represented in dom 
          render={({ field }) => (
            <FormItem>
              {/* the displayed label */}
              <FormLabel>Email</FormLabel>

              {/* the thing we actually put data into */}
              <FormControl>
                <Input type="email" placeholder="tonyhawk@birdhouse.com" {...field} />
              </FormControl>

              {/* describes this field, here we don't need it */}
              {/*
                <FormDescription>
                  Your public display name.
                </FormDescription>
              */}

              {/* auto-displays validation errors */}
              <FormMessage />
            </FormItem>
          )} />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="n0s3m4nNy" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

        {/* display supabase errors */}
        {errors.root && <FormMessage>{errors.root.message}</FormMessage>}

        <Button type="submit" variant="ghost">Log In</Button>

      </form>
    </Form>
  )
}
