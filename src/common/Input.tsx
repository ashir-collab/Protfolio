import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "../features/contact/contact.schema"
import type { ContactFormValues } from "../features/contact/contact.schema"
import { useSendContactMessage } from "../features/contact/useSendContactMessage"
import { getApiErrorMessage } from "../lib/api"

const Input = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: "", email: "", message: "" },
    })

    const { mutateAsync, isPending, isSuccess, error, reset: resetStatus } = useSendContactMessage()

    const onSubmit = async (values: ContactFormValues) => {
        try {
            await mutateAsync(values)
            reset()
        } catch {
            // surfaced below through `error`
        }
    }

    const isBusy = isPending || isSubmitting

    return (
        <>
            <div className="LastContainer w-11/12 m-auto gap-x-16 max-md:gap-x-8 max-sm:gap-2 grid grid-cols-2 text-white mt-50">
                <div className="head flex flex-col gap-2 w-full">
                    <div className="text-5xl max-lg:text-3xl max-md:text-2xl max-sm:text-2xl font-bold">Let's talk business</div>
                    <div className="text-gray-500 max-md:text-xs max-lg:text-sm"> Now that you know a lot about me, let me know if you are interested to work with me.</div>
                </div>
                <div className="InputContainer w-full ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="text-white flex flex-col gap-2 "
                    >
                        <label htmlFor="contact-name" className="font-bold  max-md:text-sm max-sm:text-xs">Name</label>
                        <input
                            id="contact-name"
                            type="text"
                            autoComplete="name"
                            disabled={isBusy}
                            aria-invalid={errors.name ? "true" : "false"}
                            className=" bg-[#181823] h-8 p-2 disabled:opacity-60"
                            {...register("name", { onChange: () => resetStatus() })}
                        />
                        {errors.name && (
                            <p className="text-red-400 text-xs">{errors.name.message}</p>
                        )}

                        <label htmlFor="contact-email" className="font-bold mt-5 max-sm:mt-2 max-md:text-sm max-sm:text-xs">Email</label>
                        <input
                            id="contact-email"
                            type="email"
                            autoComplete="email"
                            disabled={isBusy}
                            aria-invalid={errors.email ? "true" : "false"}
                            className=" bg-[#181823] h-12 max-sm:h-8  max-md:h-10 p-2 disabled:opacity-60"
                            {...register("email", { onChange: () => resetStatus() })}
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs">{errors.email.message}</p>
                        )}

                        <label htmlFor="contact-message" className="font-bold mt-5  max-sm:mt-2 max-md:text-sm max-sm:text-xs">Message</label>
                        <textarea
                            id="contact-message"
                            disabled={isBusy}
                            aria-invalid={errors.message ? "true" : "false"}
                            className=" bg-[#181823] h-25 max-sm:h-15 max-md:h-20 p-2 resize-none disabled:opacity-60"
                            {...register("message", { onChange: () => resetStatus() })}
                        />
                        {errors.message && (
                            <p className="text-red-400 text-xs">{errors.message.message}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isBusy}
                            className="bg-[#5221e6] hover:hover:text-[#00FFFF] font-bold p-4 mt-4 text-xl max-md:text-[16px] max-sm:text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isBusy ? "SENDING..." : "LET'S GET STARTED"}
                        </button>

                        <p aria-live="polite" className="min-h-5">
                            {isSuccess && !isBusy && (
                                <span className="text-green-400 text-sm">
                                    Thanks! Your message has been sent — I'll get back to you soon.
                                </span>
                            )}
                            {error && !isBusy && (
                                <span className="text-red-400 text-sm">{getApiErrorMessage(error)}</span>
                            )}
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Input
