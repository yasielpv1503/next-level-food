import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '../components/meals/meals-grid';
import { getMeals } from '../lib/meals';
import { Suspense } from 'react';
import Loading from '../loading';

const Meals = async () => {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}
export default async function MealsPage() {



    return <>
        <header className={classes.header}>
            <h1>
                Delisious meals, created{' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>
                Choose your favorite recipe and cook it yourselft.
                It is easy and fun!
            </p>
            <p className={classes.cta}>
                <Link href={`/meals/share`}>
                    Share Your Favorite Meal
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<Loading />}>
                <Meals />
            </Suspense>
        </main>
    </>
}