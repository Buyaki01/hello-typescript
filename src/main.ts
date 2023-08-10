// Utility Types

// Partial

interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

