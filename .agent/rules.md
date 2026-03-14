# Agent Rules

The following rules govern the agent's behavior in this repository:

1. **Automatic Approval**: The user has explicitly granted permission to skip technical plan reviews (Implementation Plan) and to execute commands and scripts proactively.
2. **File Modification Approval**: The agent has permission to modify any file in the repository without asking for explicit confirmation (Always Accept).
3. **SafeToAutoRun**: The agent should set `SafeToAutoRun: true` for all commands and file edits, assuming the user's intent is full automation.
4. **Execution-First**: For non-destructive tasks, the agent should move directly from understanding the requirement to execution and verification, notifying the user only upon completion or if a critical decision point is reached.
