'use client'


import { Switch } from "radix-ui"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "./ui/field"
import { Input } from "./ui/input"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet"
import { z } from "zod";
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"


const formSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters long" }).max(50, { message: "Username must be at most 50 characters long" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(16, { message: "Password must be at most 16 characters long" }),
    email: z.email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits long" }).max(15, { message: "Phone number must be at most 15 digits long" }),
    location: z.string().min(3, { message: "Location must be at least 3 characters long" }),
    role: z.enum(["admin", "user"]),

})

const EditUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "john.doe",
            email: "john.doe@gmail.com",
            phone: "1234567890",
            location: "123 Main St, Anytown, USA",
            role: "admin",
        },
    })

    // function onSubmit(data: z.infer<typeof formSchema>) {
    //     toast("You submitted the following values:", {
    //         description: (
    //             <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
    //                 <code>{JSON.stringify(data, null, 2)}</code>
    //             </pre>
    //         ),
    //         position: "bottom-right",
    //         classNames: {
    //             content: "flex flex-col gap-2",
    //         },
    //         style: {
    //             "--border-radius": "calc(var(--radius)  + 4px)",
    //         } as React.CSSProperties,
    //     })
    // }

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription asChild>
                    <form className="space-y-1">
                        <FieldGroup>
                            <Controller
                                name="title"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            Username
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        <FieldDescription>This is your public username</FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="title"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        <FieldDescription>Only admin can see your email</FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="title"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            Phone
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        <FieldDescription>Only admin can see your phone number</FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="title"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            Location
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        <FieldDescription>This is public Location</FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="title"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            Role
                                        </FieldLabel>
                                        {/* <Select
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        /> */}
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Role</SelectLabel>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                    <SelectItem value="user">User</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FieldDescription>Only Verified users can be Admin</FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                        <Button type="submit" className="w-full">Update</Button>
                    </form>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    )
}

export default EditUser