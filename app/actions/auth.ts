'use server';

// import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// This is a mock function. In a real app, you'd validate credentials against a database.
async function validateCredentials(
  email: string,
  password: string
): Promise<boolean> {
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // For demo purposes, any non-empty email and password is valid
  return email.length > 0 && password.length > 0;
}

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  const isValid = await validateCredentials(email, password);

  if (isValid) {
    // In a real app, you'd set a proper session token
    // cookies().set('user', email, { secure: true, httpOnly: true });
    redirect('/dashboard');
  } else {
    return { error: 'Invalid credentials' };
  }
}

export async function signup(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;
  const level = formData.get('level') as string;

  if (!email || !password || !confirmPassword || !level) {
    return { error: 'All fields are required' };
  }

  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' };
  }

  // In a real app, you'd create the user in the database here
  // For this example, we'll just set a cookie and redirect
  //   cookies().set('user', email, { secure: true, httpOnly: true });
  redirect('/dashboard');
}
