
import{Accordion } from './Accordion'
export const Faq = () => {
    const faqs = [
        {
            "id": 1,
            "question": "What types of pet products do you offer?",
            "answer": "We offer a wide range of pet products including toys, grooming tools, health supplements, and special diet foods for dogs, cats, and other pets. Our goal is to provide everything you need to keep your pet healthy and happy!"
        },
        {
            "id": 2,
            "question": "Can I find accessories for exotic pets?",
            "answer": "Absolutely! We cater to a variety of pet owners. Our selection includes products for exotic pets such as reptiles, birds, and fish, ensuring that you can find the perfect accessories to meet your unique pet's needs."
        },
        {
            "id": 3,
            "question": "What is your return policy on pet products?",
            "answer": "We offer a 30-day return policy on all our pet products. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange. We strive to ensure that you and your pet love your new products."
        },
        {
            "id": 4,
            "question": "Do you offer international shipping for pet products?",
            "answer": "Yes, we provide international shipping for all our pet products. You can enjoy our wide range of pet supplies no matter where you are in the world. Please check our shipping policy for detailed rates and expected delivery times."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}