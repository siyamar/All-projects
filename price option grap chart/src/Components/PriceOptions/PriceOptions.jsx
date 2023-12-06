import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to cardio and weight equipment",
            "Unlimited gym usage",
            "Locker room access",
            "Fitness assessment",
            "Access to online workout videos"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 49.99,
          "features": [
            "All Basic Membership features",
            "Access to group fitness classes",
            "Towel service",
            "Sauna and steam room access",
            "Nutrition consultation",
            "Personalized workout plan"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": 79.99,
          "features": [
            "All Premium Membership features",
            "Access for up to 4 family members",
            "Childcare services",
            "Personal training session (per family member)",
            "Monthly family fitness challenge",
            "Discounts on fitness apparel"
          ]
        }
      ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;