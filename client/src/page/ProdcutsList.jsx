import { Card } from "../components/Card"
import { Filter } from "../components/Filter"
export const ProdcutsList = () => {
    return (
        <>
            <div className="w-full ">

                <div className="w-full sm:flex mt-3">
                    {/* filter section */}
                    <div className="hidden sm:block sm:basis-[25%] ">
                        <Filter />
                    </div>

                    {/* product listing */}

                    <div className=" mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-2  w-full sm:basis-[75%] px-2">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                </div>


            </div>
        </>

    )
}
