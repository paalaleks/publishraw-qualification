---
name: publishraw-conductor
description: Create, revise, rename, hide/show or delete collection items; rescan collections, change layouts, install or upgrade PublishRaw.
---

# PublishRaw Conductor

Package version: 0.0.1

1. Identify the repository root and explicitly read its current AGENTS.md and applicable nested instructions, plus the Claude bridge when applicable. Surface the exact behavioral conflict before affected work. All paths in this package are repository-root-relative, regardless of shell cwd. Continue within this agent.
2. Identify the requested operation kind. Reject unknown kinds with OPERATION_KIND_UNKNOWN. Local draft discard is lifecycle handling, never item/media deletion; preserve receipts until uncertain remote outcomes are reconciled.
3. For collection work, read .publishraw/install.json and the selected .publishraw/collections/<collection-id>.json and .md plus .publishraw/preferences.md. Validate records through the owning repository schemas and pinned catalog. Ask on ambiguous collection/item selection. Before item mutation require an available current validated profile. Missing target-branch dependencies block publication, not local drafting where the selected workflow permits it. An unavailable collection still permits inspection and explicitly selected rescan/install repair; retain its drafts.
4. Read the workflow below and its explicit branch. A missing/empty workflow is WORKFLOW_UNAVAILABLE. Follow its rule pointers and stop at its stated boundary; a later-stage boundary does not prohibit earlier work that the workflow explicitly implements.

| Kind | Root-relative workflow | Branch | Current boundary |
| --- | --- | --- | --- |
| create | .publishraw/workflows/create.md | create | PUBLICATION_READY |
| update | .publishraw/workflows/update.md | update | WORKFLOW_NOT_IMPLEMENTED |
| rename | .publishraw/workflows/update.md | rename | WORKFLOW_NOT_IMPLEMENTED |
| hide | .publishraw/workflows/update.md | hide | WORKFLOW_NOT_IMPLEMENTED |
| show | .publishraw/workflows/update.md | show | WORKFLOW_NOT_IMPLEMENTED |
| delete | .publishraw/workflows/delete.md | delete | WORKFLOW_NOT_IMPLEMENTED |
| install | .publishraw/workflows/install.md | install | INSTALLATION_INCOMPLETE |
| rescan | .publishraw/workflows/rescan.md | rescan | WORKFLOW_NOT_IMPLEMENTED |
| upgrade | .publishraw/workflows/upgrade.md | upgrade | WORKFLOW_NOT_IMPLEMENTED |
| layout | .publishraw/workflows/layout.md | layout | WORKFLOW_NOT_IMPLEMENTED |

5. Read .publishraw/commands.md for generated protocol references. Use installed pinned versions; a sidecar cannot manufacture actual observed approval. Report concrete results, blockers and next actions.

Explicit reads verify current bytes only. Fresh root/nested Codex, Claude Code and Cursor discovery require separate actual host evidence; skipped freshness stays unverified. No native skill wrapper is shipped.
