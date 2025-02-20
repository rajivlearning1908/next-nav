import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from '../main.module.css';

const Projects = ({ initialProjects }) => {
    const [filteredProjects, setFilteredProjects] = useState(initialProjects);
    const router = useRouter();
    const { query } = router;

    // Filter projects based on the query parameter
    useEffect(() => {
        const applyFilters = () => {
            const { category, search } = query;

            let filtered = initialProjects;

            // Apply category filter
            if (category) {
                filtered = filtered.filter((project) => project.category === category);
            }

            // Apply search filter
            if (search) {
                filtered = filtered.filter((project) =>
                    project.name.toLowerCase().includes(search.toLowerCase())
                );
            }

            setFilteredProjects(filtered);
        };

        applyFilters();
    }, [query, initialProjects]);

    const handleFilterChange = (filter) => {
        const newQuery = { ...query, ...filter };

        // Use shallow routing to update the URL without re-fetching data
        router.push(
            {
                pathname: router.pathname,
                query: newQuery,
            },
            undefined,
            { shallow: true }
        );
    };

    return (
        <div>
            <Navbar />
            <h1 className={styles.textCenter}>Projects</h1>

            {/* Filter controls */}
            <div className={styles.mainContainerCustom}>
                <input
                    type="text"
                    placeholder="Search projects"
                    onChange={(e) => handleFilterChange({ search: e.target.value })}
                />
                <select
                    onChange={(e) => handleFilterChange({ category: e.target.value })}
                    value={query.category || ''}
                >
                    <option value="">All Categories</option>
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="design">Design</option>
                </select>
            </div>

            {/* Display filtered projects */}
            <ul>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <li key={project.id}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </li>
                    ))
                ) : (
                    <p>No projects found</p>
                )}
            </ul>
            <p>
                <Link href="/" className={styles.back}>
                    Back to Home
                </Link>
            </p>
        </div>
    );
};

// Fetch initial data for projects (can be from a file, API, or database)
export async function getServerSideProps() {
    const initialProjects = [
        { id: 1, name: 'Project A', description: 'Web project', category: 'web' },
        { id: 2, name: 'Project B', description: 'Mobile project', category: 'mobile' },
        { id: 3, name: 'Project C', description: 'Design project', category: 'design' },
        // more projects here...
    ];

    return { props: { initialProjects } };
}

export default Projects;
