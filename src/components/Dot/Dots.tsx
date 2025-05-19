import { DotsSvg } from './DotsSvg'
import classes from './Dots.module.css';

export const Dots = () => {
    return (
        <>
            <DotsSvg className={classes.dots} style={{ left: 0, top: 0 }} />
            <DotsSvg className={classes.dots} style={{ left: 60, top: 0 }} />
            <DotsSvg className={classes.dots} style={{ left: 0, top: 140 }} />
            <DotsSvg className={classes.dots} style={{ right: 0, top: 60 }} />
        </>
    )
}
