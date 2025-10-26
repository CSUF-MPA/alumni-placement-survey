# CSUF MPA Alumni Placement & Engagement Survey

This repository hosts the **CSUF MPA Alumni Placement & Engagement Survey**, a lightweight, responsive HTML form for collecting NASPAA-required post-graduation employment data and alumni engagement information.

---

## 🎯 Purpose

The survey supports **NASPAA Standard 5** reporting by capturing:

- Employment within six months of graduation
- Employment sector (government, nonprofit, private, etc.)
- Delivery modality and campus for multi-site reporting
- Alumni interest in mentorship, directory inclusion, and communication

Responses feed into the annual **Public Administration Program Assessment** and continuous improvement plan.

---

## 🧩 Features

- **Fully self-contained HTML** — deploy to any static host.
- **Formspree integration** — submissions go to Formspree for secure handling.
- **Smart logic** — dynamic sections for employment/education paths.
- **JSON export** — alumni can download their responses locally.
- **Accessible and mobile-friendly** — uses semantic HTML and ARIA labels.
- **Dark theme** styled with modern CSS variables.

---

## ⚙️ Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/mpa-alumni-survey.git
   cd mpa-alumni-survey
   ```

2. **Deploy the form:**
   - Works on GitHub Pages, Netlify, Vercel, or CSUF web servers.
   - Form action is preconfigured for Formspree:
     ```html
     <form action="https://formspree.io/f/xqagkgdj" method="POST">
     ```

3. **(Optional)** Add a redirect on submission:
   ```html
   <input type="hidden" name="_next" value="https://dadams.io/thanks.html" />
   ```

4. **Check submissions:**
   Log in to [Formspree](https://formspree.io/forms/xqagkgdj) → View Responses → Export CSV.

---

## 🧮 NASPAA Data Aggregation

To create the annual NASPAA employment table:

1. Export responses from Formspree as CSV.
2. Group by `modality` and `naspaa_sector`.
3. Count records per sector and per modality.
4. Map other statuses directly:
   - `edu` → Further education
   - `military` → Military service
   - `unemp_seeking` / `unemp_not_seeking` → Unemployed categories

These counts feed into the NASPAA Annual Data Report (Section 5.3).

---

## 📁 File Structure

```
mpa-alumni-survey/
├── index.html      # Main survey file
├── README.md       # This document
└── assets/          # (optional) icons, CSS, or thank-you page
```

---

## 📋 Accessibility & Privacy

- Follows WCAG 2.1 AA color contrast and ARIA best practices.
- Uses a simple honeypot field (`_gotcha`) for spam filtering.
- Responses are used only for program evaluation and NASPAA compliance.
- Alumni may request deletion at any time.

---

## 👩‍💼 Maintainers

**Public Administration Program**  
California State University, Fullerton  
Contact: [dadams@fullerton.edu](mailto:dadams@fullerton.edu)

---

## 🧠 Future Enhancements

- Google Sheets/Apps Script integration for automated NASPAA table output.
- Optional authentication for staff view of submissions.
- Localization support for bilingual surveys (English/Spanish).
- Dark/light mode toggle.

---

© 2025 CSUF Department of Politics, Administration & Justice. All rights reserved.

