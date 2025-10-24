import { useNavigate } from 'react-router-dom';
import ProjectForm from '../components/form'; 
import { useCreateProject } from '../hooks/useCreateProject';

function CreateProjectPage() {

  const { createProject, isLoading, error } = useCreateProject();
  const navigate = useNavigate();


  const handleFormSubmit = async (formData) => {

    const newProject = await createProject(formData);


    if (newProject) {
      alert('¡Proyecto creado con éxito!');
      navigate('/');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Crear un Nuevo Proyecto</h1>

      <ProjectForm
        onSubmit={handleFormSubmit}
        isLoading={isLoading}
      />

      {error && (
        <p className="text-red-500 text-center mt-4">
          Error: {error}
        </p>
      )}
    </div>
  );
}

export default CreateProjectPage;