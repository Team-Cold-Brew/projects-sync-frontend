import { useState } from 'react';
const URL = "http://localhost:8080/api/projects";

export function useCreateProject() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const createProject = async (projectData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(URL, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData), 
      });

      if (!response.ok) {
        
        throw new Error('La respuesta de la red no fue exitosa');
      }

      const result = await response.json();
      return result;

    } catch (err) {
      setError(err.message);
      
    } finally {
      setIsLoading(false); 
    }
  };

  return { createProject, isLoading, error };
}