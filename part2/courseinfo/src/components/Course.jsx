const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    );
}

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    );
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part, index) => (
                <Part key={index} part={part} />
            ))}
        </>
    );
}


const Total = ({ parts }) => {
    return (
        <strong>Number of exercises {parts.reduce((sum, part) => sum += part.exercises, 0)}</strong>
    );
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
}

export default Course;