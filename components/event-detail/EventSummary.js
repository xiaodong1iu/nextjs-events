import classes from './EventSummary.module.css'


function EventSummary({title}) {
    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    )
}

export default EventSummary