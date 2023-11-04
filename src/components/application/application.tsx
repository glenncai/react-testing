import { FC } from 'react';

const Application: FC = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your fullname..." />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select name="job-location" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I accept the terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Application;
