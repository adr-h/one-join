
export const INITIAL_MIGRATIONS_AND_SEEDS = `

  -- Jobs board DB:
  CREATE TABLE IF NOT EXISTS employers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  );

  CREATE TABLE IF NOT EXISTS candidates (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  );

  CREATE TABLE IF NOT EXISTS resumes (
    id SERIAL PRIMARY KEY,
    candidate_id INTEGER NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
    file_path TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    employer_id INTEGER NOT NULL REFERENCES employers(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS statuses (
    id SERIAL PRIMARY KEY,
    status TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    candidate_id INTEGER NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
    job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
    applied_at TIMESTAMP NOT NULL DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS application_statuses (
    id SERIAL PRIMARY KEY,
    application_id INTEGER NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
    status_id INTEGER NOT NULL REFERENCES statuses(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
  );

  INSERT INTO employers (id, name, email) VALUES
    (1, 'Zeek Ltd', 'hr@zeek.com'),
    (2, 'Zora Inc', 'hr@zora.com');

  INSERT INTO candidates (id, name, email) VALUES
    (1, 'Alice Smith', 'alice@mail.com'),
    (2, 'Bob Johnson', 'bob@mail.com'),
    (3, 'Charlie Brown', 'charlie@mail.com');

  INSERT INTO resumes (id, candidate_id, file_path, created_at) VALUES
    (1, 1, 'alice_resume.pdf', '2022-10-01 10:00:00'),
    (2, 2, 'bob_resume.pdf', '2022-10-02 11:00:00');

  INSERT INTO jobs (id, title, created_at, employer_id) VALUES
    (1, 'Software Engineer', '2022-10-09 10:00:00', 1),
    (2, 'Data Scientist','2022-10-09 10:00:00', 1),
    (3, 'Product Manager','2022-10-09 10:00:00', 1),
    (4, 'Cloud Engineer', '2022-10-09 10:00:00', 2),
    (5, 'UX Designer', '2022-10-09 10:00:00', 2),
    (6, 'DevOps Engineer', '2022-10-09 10:00:00', 2);

  INSERT INTO statuses (id, status) VALUES
    (1, 'Interview Scheduled'),
    (2, 'Offer Extended'),
    (3, 'Hired'),
    (4, 'Rejected');

  INSERT INTO applications (candidate_id, job_id, applied_at) VALUES
    (1, 1, '2022-10-10 11:00:00'), -- Alice applied for Software Engineer
    (2, 1, '2022-10-10 11:01:00'), -- Bob applied for Software Engineer
    (3, 2, '2022-10-10 11:02:00'); -- Charlie applied for Data Scientist

  INSERT INTO application_statuses (application_id, status_id, created_at) VALUES
    (1, 1, '2022-11-10 10:00:00'), -- Alice's Software Engineer application: Interview Scheduled
    (2, 1, '2022-11-10 10:00:00'); -- Bob's Software Engineer application: Interview Scheduled


  -- Animal shelter DB:
  CREATE TABLE IF NOT EXISTS people(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS animal_types(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS animals (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type_id INTEGER NOT NULL REFERENCES animal_types(id) ON DELETE CASCADE,
    owner_id INTEGER REFERENCES people(id) ON DELETE CASCADE
  );

  INSERT INTO people (id, name, email) VALUES
    (1, 'Dexter Morgan', 'dexter@morgan.com'),
    (2, 'Walter White', 'walter@white.com'),
    (3, 'Dr Jekyll', 'jekyll@hyde.com');

  INSERT INTO animal_types (id, name) VALUES
    (1, 'Cat'),
    (2, 'Dog'),
    (3, 'Bird');

  INSERT INTO animals (id, name, type_id, owner_id) VALUES
    (1, 'Garfield', 1, 1),
    (2, 'Scooby', 2, 2),
    (3, 'Tweety', 2, NULL);


  -- Custom t-shirt DB:
  CREATE TABLE graphic_designs (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
  );

  CREATE TABLE shirt_sizes (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
  );

  CREATE TABLE shirt_colours (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
  );

  INSERT INTO graphic_designs (id, name) VALUES
    (1, 'Firey Poney'),
    (2, 'Tranquil Seahorse');

  INSERT INTO shirt_sizes (id, name) VALUES
    (1, 'small'),
    (2, 'medium'),
    (3, 'large');

  INSERT INTO shirt_colours (id, name) VALUES
    (1, 'black'),
    (2, 'white');
`;

export const INNER_JOIN_QUERY =
`SELECT
  jobs.title as job_title,
  employers.name as company_name
FROM jobs
INNER JOIN employers ON jobs.employer_id = employers.id
WHERE employers.name = 'Zeek Ltd';`;

export const INTRO_QUERY =
`SELECT
 *
FROM candidates
`;

export const LEFT_JOIN_QUERY =
`SELECT
  candidates.name AS candidate_name,
  resumes.file_path AS resume_file
FROM candidates
LEFT JOIN resumes ON candidates.id = resumes.candidate_id;
`;

export const RIGHT_JOIN_QUERY =
`SELECT
  candidates.name as candidate_name,
  resumes.file_path as resume_file
FROM resumes
RIGHT JOIN candidates ON resumes.candidate_id = candidates.id
`;

export const FULL_JOIN_QUERY =
`SELECT
  people.name as potential_owner,
  animals.name as potential_pet
FROM people
FULL JOIN animals ON people.id = animals.owner_id
ORDER BY potential_pet ASC;
`;

export const CROSS_JOIN_QUERY =
`SELECT
    graphic_designs.name as design,
    shirt_sizes.name as size,
    shirt_colours.name as colour
FROM graphic_designs
CROSS JOIN shirt_sizes
CROSS JOIN shirt_colours
ORDER BY graphic_designs.name;
`;