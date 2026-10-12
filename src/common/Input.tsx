import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../features/contact/contact.schema";
import type { ContactFormValues } from "../features/contact/contact.schema";
import { useSendContactMessage } from "../features/contact/useSendContactMessage";
import { getApiErrorMessage } from "../lib/api";

const Input = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const {
    mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
    reset: resetStatus,
  } = useSendContactMessage();

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await mutateAsync(values);
      reset();
    } catch {
      // surfaced below through `error`
    }
  };

  const isBusy = isPending || isSubmitting;

  return (
    <>
      <div className="LastContainer w-11/12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-white mt-28 sm:mt-36 md:mt-44">
        <div className="head flex flex-col gap-4 w-full">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's talk business
          </div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
            Now that you know a lot about me, let me know if you are interested
            in working together. I'm always open to discussing new projects,
            creative ideas, or opportunities.
          </p>
        </div>

        <div className="InputContainer w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="text-white flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="font-semibold text-xs sm:text-sm text-gray-300"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                disabled={isBusy}
                aria-invalid={errors.name ? "true" : "false"}
                placeholder="Your full name"
                className="bg-[#181823] border border-white/10 focus:border-cyan-400 rounded-xl h-11 sm:h-12 px-4 text-sm text-white placeholder-gray-500 outline-none transition-colors disabled:opacity-60"
                {...register("name", { onChange: () => resetStatus() })}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-0.5">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="font-semibold text-xs sm:text-sm text-gray-300"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                disabled={isBusy}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="name@example.com"
                className="bg-[#181823] border border-white/10 focus:border-cyan-400 rounded-xl h-11 sm:h-12 px-4 text-sm text-white placeholder-gray-500 outline-none transition-colors disabled:opacity-60"
                {...register("email", { onChange: () => resetStatus() })}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-0.5">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="font-semibold text-xs sm:text-sm text-gray-300"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                disabled={isBusy}
                aria-invalid={errors.message ? "true" : "false"}
                placeholder="Tell me about your project or inquiry..."
                rows={4}
                className="bg-[#181823] border border-white/10 focus:border-cyan-400 rounded-xl p-4 text-sm text-white placeholder-gray-500 outline-none transition-colors resize-none disabled:opacity-60"
                {...register("message", { onChange: () => resetStatus() })}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-0.5">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isBusy}
              className="bg-[#2445b8] hover:bg-[#3156d3] text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl text-sm sm:text-base cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(36,69,184,0.5)] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isBusy ? "SENDING..." : "LET'S GET STARTED"}
            </button>

            <p aria-live="polite" className="min-h-5 mt-1">
              {isSuccess && !isBusy && (
                <span className="text-green-400 text-sm">
                  Thanks! Your message has been sent — I'll get back to you
                  soon.
                </span>
              )}
              {isError && !isBusy && (
                <span className="text-red-400 text-sm">
                  {getApiErrorMessage(error)}
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Input;
