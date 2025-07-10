function filterSkills(category) {
  const buttons = document.querySelectorAll('.filter-btn');
  const skills = document.querySelectorAll('.skill-card');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  skills.forEach(skill => {
    if (category === 'all') {
      skill.style.display = 'flex';
    } else {
      if (skill.classList.contains(category)) {
        skill.style.display = 'flex';
      } else {
        skill.style.display = 'none';
      }
    }
  });
}
