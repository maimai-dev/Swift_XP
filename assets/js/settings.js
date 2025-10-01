document.addEventListener('DOMContentLoaded', function() {
  const missionToggle = document.getElementById('notif-missions');
  const rewardsToggle = document.getElementById('notif-rewards');

  missionToggle.checked = localStorage.getItem('notifMissions') !== 'false';
  rewardsToggle.checked = localStorage.getItem('notifRewards') !== 'false';

  missionToggle.addEventListener('change', function() {
    localStorage.setItem('notifMissions', this.checked);
  });

  rewardsToggle.addEventListener('change', function() {
    localStorage.setItem('notifRewards', this.checked);
  });
});