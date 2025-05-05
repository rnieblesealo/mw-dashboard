// TODO: NEXT TIME: theming with cn (change red color of input)

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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

// define shape of form data
const formSchema = z.object({
  email: z.string().email("Invalid email address!"),
  // password with standard safety requirements
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Must include a lowercase letter")
    .regex(/[A-Z]/, "Must include an uppercase letter")
    .regex(/[0-9]/, "Must include a number")
    .regex(/[^A-Za-z0-9]/, "Must include a special character")
})

const LoginForm = () => {
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

  // define submit handler
  // here we send the data to backend, etc.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  // lastly define the actual form body!
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-4">

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
                <Input placeholder="tonyhawk@birdhouse.com" {...field} />
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
                <Input placeholder="n0s3m4nNy" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

        <Button type="submit" variant="ghost">Log In</Button>

      </form>
    </Form>
  )
}

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-8">
      <img
        src="/small-logo.png"
        className="w-32" />
      <LoginForm />
    </div>
  )
}

export default App
