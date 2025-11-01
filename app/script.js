const state = {
  hydration: { now: 0.84, goal: 2 }
};

const hydrationNow = document.getElementById('hydrationNow');
const hydrationGoal = document.getElementById('hydrationGoal');
const hydrationFill = document.getElementById('hydrationFill');

function render() {
  hydrationNow.textContent = state.hydration.now.toFixed(2);
  const pct = Math.min(100, (state.hydration.now / state.hydration.goal) * 100);
  hydrationFill.style.width = pct + "%";
}

document.querySelectorAll('[data-h2o]').forEach(btn => {
  btn.onclick = () => {
    state.hydration.now += parseFloat(btn.dataset.h2o);
    render();
  };
});

render();
