function moveElevator(floor) {
  const elevator = document.getElementById("elevator");
  const floorHeight = 100; // Each floor is 100px in height

  // Calculate the new position
  const newPosition = (floor - 1) * floorHeight;

  // Move the elevator
  elevator.style.bottom = newPosition + "px";
}
