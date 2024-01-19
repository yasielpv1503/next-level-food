import MealItem from './meal-item'
import classes from './meals-grid.module.css'
interface IMealsGrid {
    meals: any[]
}
export default function MealsGrid({ meals }: IMealsGrid) {

    return <ul className={classes.meals}>
        {meals.map((e: any, i: number) => <li key={i}>
            <MealItem {...e} />
        </li>)}
    </ul>

}