# CSUF MPA Alumni Placement & Engagement Survey

A lightweight, accessible, and CSUF-branded HTML form for collecting NASPAA-required post-graduation employment data and alumni engagement information.

![WCAG 2.1 AA Compliant](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-green)
![Formspree](https://img.shields.io/badge/Backend-Formspree-blue)

---

## 🎯 Purpose

This survey supports **NASPAA Standard 5** reporting requirements by capturing:

- Employment status within six months of graduation
- Employment sector and position details
- Alumni engagement preferences (directory, newsletter, mentorship)
- Graduation term information

Responses feed into the annual **Public Administration Program Assessment** and accreditation reporting.

---

## ✨ Features

- **🎨 CSUF Branded** — Official color palette and university logos
- **♿ Fully Accessible** — WCAG 2.1 AA compliant (tested with pa11y)
- **📱 Responsive Design** — Works seamlessly on mobile, tablet, and desktop
- **🔒 Secure Submission** — Formspree backend with AJAX handling
- **✅ Custom Confirmation** — Branded thank you page with animations
- **💾 JSON Export** — Alumni can download their responses locally
- **🎛️ Smart Logic** — Dynamic sections based on employment status
- **📊 Easy Data Export** — CSV export from Formspree dashboard

---

## 🚀 Quick Start

### Deployment

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dadams-AU/alumni-placement-survey.git
   cd alumni-placement-survey
   ```

2. **Deploy to any static host:**
   - GitHub Pages
   - Netlify
   - Vercel
   - CSUF web servers

3. **Files to deploy:**
   ```
   index.html
   thankyou.html
   styles.css
   script.js
   *.png (logo files)
   ```

### Development

1. **Install dependencies (for accessibility testing):**
   ```bash
   npm install
   ```

2. **Run accessibility tests:**
   ```bash
   npm test
   ```

3. **View form locally:**
   - Open `mpa_alumni_placement_engagement_survey_html.html` in a browser
   - Form submissions require internet connection for Formspree

---

## 📁 File Structure

```
alumni-placement-survey/
├── index.html  # Main survey form
├── thankyou.html                                      # Custom confirmation page
├── styles.css                                         # CSUF-branded styles
├── script.js                                          # Form logic & submission
├── ACCESSIBILITY.md                                   # Accessibility compliance report
├── CalStateFullerton-reversed-orange-R.png            # CSUF logo (header)
├── PUBLIC-ADMINISTRATION-reversed-orange.png          # PA logo (footer)
├── package.json                                       # npm scripts & dependencies
├── .gitignore                                         # Excludes node_modules
└── readme.md                                          # This file
```

---

## 🎨 CSUF Brand Colors

The survey uses the official CSUF dark mode color palette:

- **Titan Blue**: `#00244E`
- **Medium Blue**: `#0F3F8C`
- **Sky Blue**: `#99B3B9`
- **Titan Orange**: `#FF7900` (accent)
- **Dark Background**: `#1A2029`
- **Text**: `#EBEBEB`

---

## 📊 Managing Responses

### View Submissions

1. Log in to [Formspree Dashboard](https://formspree.io/forms/xqagkgdj)
2. View responses in real-time
3. Export to CSV for analysis

### NASPAA Reporting

To create the annual NASPAA employment table:

1. Export responses from Formspree as CSV
2. Filter by `grad_term` for reporting period
3. Group by `naspaa_status` and `naspaa_sector`
4. Count records per category:
   - Employed in profession (by sector)
   - Obtaining further education
   - Military Service
   - Unemployed (seeking/not seeking)

---

## ♿ Accessibility

✅ **WCAG 2.1 Level AA Compliant**

- Semantic HTML with proper form structure
- All inputs have associated labels
- Keyboard navigation fully supported
- Screen reader compatible with ARIA labels
- High contrast CSUF colors meet accessibility standards
- Required fields clearly indicated
- Error messages are accessible

**Testing:** Run `npm test` to verify compliance anytime.

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for detailed compliance report.

---

## 🔒 Privacy & Data Handling

- Responses are used only for program evaluation and NASPAA compliance
- No data is shared outside the MPA program without explicit consent
- Alumni may opt-in to directory sharing and newsletter
- Data retention follows university policies
- Alumni may request data deletion at any time

**Contact:** [dpadams@fullerton.edu](mailto:dpadams@fullerton.edu)

---

## 🛠️ Customization

### Update Formspree Endpoint

Replace the form action in `mpa_alumni_placement_engagement_survey_html.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="alumniForm">
```

### Modify Employment Sectors

Edit the `naspaa_sector` dropdown options in the HTML file to match your reporting needs.

### Change Colors

Update CSS variables in `styles.css`:

```css
:root {
  --bg: #1A2029;
  --brand: #1A2F48;
  /* ... */
}
```

---

## 📞 Support

**Public Administration Program**  
California State University, Fullerton  
Department of Politics, Administration & Justice

**Technical Contact:** [dadams@fullerton.edu](mailto:dadams@fullerton.edu)

---

## 📄 License

© 2025 CSUF Department of Politics, Administration & Justice. All rights reserved.

---

## 🙏 Acknowledgments

- Built with accessibility in mind following WCAG 2.1 guidelines
- Tested with pa11y and axe-core
- Designed using CSUF brand standards


