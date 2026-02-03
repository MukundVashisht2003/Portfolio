
```markdown
# 🌐 Deploying to GitHub Pages

This guide explains how to deploy your portfolio to GitHub Pages while keeping your `data.json` private using GitHub Secrets.

## Prerequisites

- GitHub account
- Git installed locally
- Your portfolio project ready

---

## Step 1: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git push -u origin main
```

---

## Step 2: Add Your Data as a GitHub Secret

Your `data.json` contains personal information (phone, email) that you may want to keep private. Instead of committing it to the repository, we store it as a GitHub Secret.

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Set the following:
   - **Name**: `PORTFOLIO_DATA`
   - **Value**: Paste your entire `data.json` content

### Example Secret Value

You can paste the JSON formatted or minified:

```json
{
  "name": "Your Name",
  "title": "Full Stack Developer",
  "description": "Brief description about yourself.",
  "resume": "https://drive.google.com/file/d/YOUR_FILE_ID/preview",
  "socialLinks": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "mail": "mailto:your.email@example.com"
  },
  "contact": {
    "email": "your.email@example.com",
    "phone": "+1 123-456-7890",
    "location": "City, Country"
  },
  "workExperience": [
    {
      "id": 1,
      "company": "Company Name",
      "position": "Job Title",
      "duration": "Jan 2024 - Present",
      "location": "City",
      "description": "Job description...",
      "technologies": ["React", "TypeScript"]
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description...",
      "tags": ["React", "Node.js"],
      "liveUrl": "https://project.com",
      "githubUrl": "https://github.com/user/project",
      "status": "completed"
    },
    {
      "id": 2,
      "title": "Company Internal Tool",
      "description": "Internal tool description...",
      "tags": ["React", "TypeScript"],
      "liveUrl": "#",
      "githubUrl": "#",
      "status": "completed",
      "isCompanyProject": true
    }
  ]
}
```

### Data Fields Reference

| Field | Description |
|-------|-------------|
| `name` | Your full name |
| `title` | Professional title |
| `description` | Brief bio |
| `resume` | Resume URL (Google Drive preview or direct PDF link) |
| `socialLinks` | GitHub, LinkedIn, email links |
| `contact` | Email, phone, location |
| `workExperience` | Array of work experiences |
| `projects` | Array of projects |
| `isCompanyProject` | (Optional) Set to `true` to hide GitHub button |

---

## Step 3: Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**

---

## Step 4: Deploy

### Automatic Deployment
The site automatically deploys when you push to the `main` branch.

### Manual Deployment
1. Go to the **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

---

## Step 5: Access Your Site

After deployment completes, your portfolio will be available at:

```
https://YOUR_USERNAME.github.io/Portfolio/
```

---

## How It Works

### File Structure
```
.github/
└── workflows/
    └── deploy.yml      # GitHub Actions workflow

src/
└── Data/
    ├── data.json           # Your actual data (gitignored)
    └── data.template.json  # Template for reference
```

### Workflow Process

1. **Push to main** → Triggers GitHub Actions
2. **Checkout code** → Gets your repository
3. **Create data.json** → Injects `PORTFOLIO_DATA` secret into `src/Data/data.json`
4. **Build** → Runs `npm run build`
5. **Deploy** → Uploads `dist/` folder to GitHub Pages

---

## Important Notes

| Item | Description |
|------|-------------|
| ⚠️ **Gitignored** | `src/Data/` is in `.gitignore` - your local `data.json` won't be pushed |
| ✅ **Template** | Use `src/Data/data.template.json` as a reference for the structure |
| 🔒 **Private** | Your sensitive data stays private in GitHub Secrets |
| 🔄 **Updates** | To update content, update the `PORTFOLIO_DATA` secret and re-run the workflow |

---

## Updating Your Portfolio

### Update Content
1. Edit the `PORTFOLIO_DATA` secret in GitHub Settings
2. Go to Actions → Run the workflow manually, OR
3. Push any commit to trigger automatic deployment

### Update Code
1. Make changes locally
2. Push to `main` branch
3. Deployment happens automatically

---

## Resume Setup

Your resume can be hosted on Google Drive:

1. Upload your resume PDF to Google Drive
2. Right-click → **Share** → **Anyone with the link can view**
3. Copy the link and convert it:
   - **Original**: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - **Preview**: `https://drive.google.com/file/d/FILE_ID/preview`
4. Use the **preview** URL in your `data.json`

---

## Company Projects

To mark a project as a company project (hides the GitHub button):

```json
{
  "title": "Internal Dashboard",
  "isCompanyProject": true
}
```

This will display "Company Project" label instead of a GitHub link.

---

## Troubleshooting

### Build Fails
- Check that your `PORTFOLIO_DATA` secret contains valid JSON
- Verify the JSON structure matches `data.template.json`
- Ensure all required fields are present

### Page Not Found (404)
- Ensure GitHub Pages source is set to "GitHub Actions"
- Check that the `base` path in `vite.config.ts` matches your repo name
- Wait for both workflows to complete (Deploy + pages-build-deployment)
- Hard refresh: `Ctrl + Shift + R`

### Data Not Showing
- Verify the secret name is exactly `PORTFOLIO_DATA`
- Check the Actions log for any errors during the "Create data.json" step

### Resume Not Loading
- Ensure Google Drive file is set to "Anyone with the link can view"
- Use `/preview` URL format, not `/view`
- Check browser console for iframe errors
```

---

