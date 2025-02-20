// pages/projects/[id].js

import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;  // This will extract the 'id' from the URL

  // Example of fetching project details based on the 'id'
  const projectDetails = {
    1: { name: 'Project One', description: 'This is the first project.' },
    2: { name: 'Project Two', description: 'This is the second project.' },
    3: { name: 'Project Three', description: 'This is the third project.' }
  };

  // Fallback in case the project is not found or the ID is invalid
  const project = projectDetails[id] || { name: 'Project not found', description: '' };

  return (
    <div>
        <Navbar />
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
