const API_BASE_URL = (import.meta as any).env.VITE_API_URL || 'http://localhost:3000/api';

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const isFormData = options.body instanceof FormData;
  const headers: any = { ...options.headers };

  if (!isFormData && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const fetchOptions: RequestInit = {
    ...options,
    credentials: 'include',
    headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, fetchOptions);

    if (response.status === 401) {
      console.warn('🔒 Sesja wygasła. Wylogowuję...');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('isSuperAdmin');
      localStorage.removeItem('allowedGroups');

      const base = (import.meta as any).env.BASE_URL || '/';
      const targetPath = '/admin-login';
      const fullPath = base === '/' ? targetPath : base + targetPath.substring(1);

      if (window.location.pathname !== fullPath) {
        window.location.href = fullPath;
      }
    }
    return response;
  } catch (error) {
    console.error('Błąd API:', error);
    throw error;
  }
}