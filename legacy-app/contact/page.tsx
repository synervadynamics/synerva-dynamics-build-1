import ContactForm from "../../components/forms/ContactForm";

export const metadata = {
  title: "Contact — Syndicate Dynamics",
  description:
    "Get in touch to start a project or ask a question.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold sm:text-4xl">Contact</h1>
      <p className="mt-3 text-neutral-300">
        Share a few details and you’ll get a quick, clear reply.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
