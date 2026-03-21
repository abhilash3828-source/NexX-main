# NEXX Esports

A static website for NEXX Esports - the competitive gaming community.

## Features

- **Responsive Design**: Works on all devices
- **Dark Theme**: Modern esports aesthetic with cyan accents
- **Tournament Listings**: Display upcoming and past tournaments
- **Registration System**: Modal-based registration with payment integration
- **UPI Payment**: Direct integration with Google Pay and PhonePe
- **Admin Portal**: Dashboard for managing registrations
- **Community Stats**: Showcase player engagement
- **Mobile Navigation**: Hamburger menu for mobile devices

## Files

- `index.html` - Main website with registration system
- `admin.html` - Admin dashboard for managing registrations
- `images/logo2.svg` - NEXX Esports logo
- `.nojekyll` - GitHub Pages configuration
- `.gitignore` - Git ignore rules

## Registration System

The website includes a complete registration system:

1. **Registration Modal**: Click "Register" to open the registration form
2. **Form Fields**: Name, email, phone, game ID, tournament selection
3. **Payment Options**: Google Pay and PhonePe integration
4. **UPI Integration**: Automatic redirection to UPI apps with pre-filled amount
5. **Admin Portal**: Separate admin page to view and manage registrations

## Admin Portal

Access the admin portal at `admin.html` to:
- View all registrations
- Monitor payment status
- Export registration data
- Manage tournament settings
- **Approve or reject registrations** (new feature)

**Admin Password**: `nexx admin` (case-sensitive)

### Registration Approval System

1. **User Registration**: Users register through the website and submit payment
2. **Admin Review**: Registrations appear as "Pending" in the admin portal
3. **Approval Process**: Admin can approve or reject each registration
4. **Live Updates**: Approved registrations immediately update slot counts on the main website
5. **Status Tracking**: View approved, pending, and rejected registrations

### Export Functionality

- **Filter by Tournament**: Select specific tournament or export all registrations
- **Excel Export**: Download registration data as CSV file (compatible with Excel)
- **Complete Data**: Includes all registration details (name, email, game ID, payment info, etc.)
- **Date-stamped Files**: Files named with tournament and current date

**Export Features:**
- Filter dropdown to select tournament
- One-click export to CSV format
- All registration fields included
- Automatic filename with tournament name and date

## Data Management

### Data Persistence

✅ **Permanent Storage**: Data is now stored using IndexedDB, which is much more persistent than localStorage:

- **Survives browser restarts**: Data remains even after closing/reopening browser
- **Resistant to cache clearing**: Only deleted when you manually clear site data
- **Cross-session persistence**: Data persists across browser sessions
- **Automatic fallback**: If IndexedDB fails, falls back to localStorage

### Data Persistence Warning

⚠️ **IndexedDB is permanent until manually cleared**. Data will only be lost if:

- User manually clears browser data/site data
- Browser's storage quota is exceeded (very rare)
- User uses browser's "Clear all data" feature

### Backup and Restore

The admin portal includes robust data management tools:

1. **Backup Data**: Download all registration data as a JSON file with metadata
2. **Restore Data**: Upload previously backed-up JSON files to restore data
3. **Clear Data**: Remove all stored registration data (irreversible)

**Storage Details:**
- Uses IndexedDB for primary storage (permanent)
- JSON format for backups with version metadata
- Automatic data integrity checks

### Data Validation

The website includes comprehensive data validation:
- Real-time integrity checks every 30 seconds
- Automatic refresh when inconsistencies detected
- Cross-page synchronization via postMessage API
- Fallback mechanisms for storage failures

## Tournament Management System

The admin panel now includes a complete tournament management system:

### Creating Tournaments

1. **Access Admin Panel**: Open `admin.html` and login with password `nexx admin`
2. **Click "Create Tournament"**: Use the ➕ Create Tournament button
3. **Fill Tournament Details**:
   - **Tournament Name**: Display name (e.g., "BGMI Squad Championship")
   - **Tournament ID**: Unique identifier (e.g., "bgmi-squad", lowercase, hyphens only)
   - **Game Name**: Game title (e.g., "BGMI")
   - **Max Slots**: Maximum number of participants (e.g., 100)
   - **Entry Fee**: Cost per participant in ₹ (e.g., 50)
   - **Start/End Date**: Tournament schedule
   - **Description**: Rules and details
   - **Status**: Active/Inactive/Upcoming

### Managing Tournaments

- **View All Tournaments**: Dashboard shows all created tournaments
- **Edit Tournaments**: Click "Edit" to modify tournament details
- **Delete Tournaments**: Click "Delete" to remove tournaments (also deletes related registrations)
- **Real-time Stats**: See registration counts for each tournament

### Dynamic Website Updates

- **Automatic Loading**: Main website automatically loads tournaments from database
- **Live Updates**: When admin creates/updates tournaments, main site updates instantly
- **Registration Integration**: Users can register for any active tournament
- **Slot Tracking**: Real-time slot count updates across all tournaments

### Enhanced Backup System

- **Complete Backup**: Backup now includes both tournaments and registrations
- **Full Restore**: Restore function recovers all tournament and registration data
- **Cross-Session**: All data persists across browser sessions and restarts

## Deployment to GitHub Pages

1. **Create a GitHub repository** (name it `yourusername.github.io` for a personal site)

2. **Upload all files** from this folder to your repository

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save

4. **Your site will be live** at `https://yourusername.github.io` (or `https://yourusername.github.io/repo-name`)

## Customization

- **Colors**: Edit the CSS custom properties in the `<style>` section
- **Content**: Update the HTML content directly in `index.html`
- **Tournaments**: Modify the tournament data in the HTML
- **UPI ID**: Update the UPI ID in the JavaScript for payments
- **Images**: Replace the SVG logo with your actual logo files

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- UPI URL scheme for payments
- SVG for graphics

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
GOOGLE_SERVICE_ACCOUNT_KEY=<json-string>
```

### Frontend

Create `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_ADMIN_PASS=nexxadmin
```

> **Note:** For production, set a stronger admin password.

---

## Deployment

### Frontend (Vercel)
1. Create a Vercel account (https://vercel.com).
2. Import the repository and set the **root directory** to `frontend`.
3. Set the following environment variable:
   - `NEXT_PUBLIC_API_URL` → `https://<YOUR_RENDER_BACKEND_URL>`
4. Deploy.

### Backend (Render)
1. Create a Render account (https://render.com).
2. Create a new **Web Service**.
3. Connect the repository and set the **root directory** to `backend`.
4. Use the following commands:
   - **Build:** `npm install`
   - **Start:** `npm start`
5. Add environment variables:
   - `PORT=4000`
   - `CORS_ORIGIN=https://<YOUR_FRONTEND_URL>`
   - Optional: `GOOGLE_SHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_KEY`

> NOTE: This repo includes `frontend/vercel.json` and `# NEXX Esports

A static website for NEXX Esports - the competitive gaming community.

## Features

- **Responsive Design**: Works on all devices
- **Dark Theme**: Modern esports aesthetic with cyan accents
- **Tournament Listings**: Display upcoming and past tournaments
- **Community Stats**: Showcase player engagement
- **Mobile Navigation**: Hamburger menu for mobile devices

## Deployment to GitHub Pages

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository
   - Name it `yourusername.github.io` for a user/organization site, or any name for a project site

2. **Upload Files**:
   - Upload `index.html` and the `images/` folder to your repository
   - Make sure `index.html` is in the root directory

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Site**:
   - Your site will be available at `https://yourusername.github.io` (for user sites) or `https://yourusername.github.io/repository-name` (for project sites)
   - It may take a few minutes for the site to deploy

## Customization

- **Colors**: Edit the CSS custom properties in the `<style>` section
- **Content**: Update the HTML content directly in `index.html`
- **Tournaments**: Modify the tournament data in the HTML
- **Images**: Replace the SVG logo with your actual logo files

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- SVG for graphics

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+` to help bootstrap deployment.

---

## UPI Payment Flow (Recommended)

1. Pay ₹20 to `abhilash.3828@oksbi` using any UPI app.
2. Upload the payment screenshot and enter the Transaction ID on the registration page.
3. Admin manually verifies and approves the registration.
