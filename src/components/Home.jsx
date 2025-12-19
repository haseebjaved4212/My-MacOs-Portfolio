
import { locations } from '#constants';

const projects = locations.work?.children ?? [];

const Home = () => {
  return (
    <section id="home">
        <ul>
            {projects.map((project) => (
                <li key={project.id}>
                    <img src={project.image} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </li>
            ))  }
        </ul>
    </section>
  )
}

export default Home