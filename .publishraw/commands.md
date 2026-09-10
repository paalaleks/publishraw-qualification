# Pinned command references

Package 0.0.1; helper 0.0.1.

The /example/repository and /example/verified-release paths below are illustrative, not executable local paths. Bootstrap the same trusted manifest locator and resolve runtime/helper/runner entries from its verified cache. Resolve repository paths from the identified root. Write resolved requests only under ignored .publishraw/local/; keep host-specific paths out of tracked files. Treat credential-bearing responses as helper-private. Invocation IDs correlate requests; they are not approval or operation receipts.

Helper schema methods: preflight, inspect-image, connection-status, connect, upload-approved, upload-status, delete-approved-asset, run-checks, disconnect. Adapter schema methods: inspect, planConversion, applyPlan, validateItem, buildContent, verifyRendering, reconcile. Schema membership is not availability. This slice implements helper preflight/run-checks and bootstrap adapter inspect, install planConversion/applyPlan and draft/publication-purpose validateItem. The verified adapterRunnerEntry also exports prepareDraftApprovalPresentation, recordObservedDraftApproval, inspectDraftApproval, normalizeApprovalText, sha256Bytes, saveDraftWithRecovery, recoverDraftSave, captureDraftRecovery, recoverMissingDraft, discardLocalDraft and assertUpgradeMutationReady for exact create-draft approval and staged-content verification; those library calls do not manufacture the conductor's user observation. Read workflows/install.md for the exact local installation plan handoff, workflows/create.md for authoritative drafting and approval, and rules/publication.md for direct and pull-request workflows; installed/upgrade dispatch and other methods remain unavailable. The examples below exercise preflight and inspect; run-checks requires the current validated profile and operation.

Write each request to its indicated ignored local request path and launch executable with argv directly, without shell interpolation. Use a distinct result path and inspect the atomic final JSON. Exit 0 is completed, 2 invalid input, 3 known blocker, 4 pending/retryable/unverified. Missing/truncated output stays unverified; inspect status before any write retry.

## helper

```json
{
  "tool": "helper",
  "executable": "/example/verified-release/node.exe",
  "argv": [
    "/example/verified-release/helper.mjs",
    "invoke",
    "--request",
    "/example/repository/.publishraw/local/preflight-request.json",
    "--result",
    "/example/repository/.publishraw/local/preflight-result.json"
  ],
  "request": {
    "id": "a0f8faa8-94e2-4a94-9a2d-bf4b6facf4b7",
    "protocolVersion": 1,
    "method": "preflight",
    "params": {
      "repositoryRoot": "/example/repository"
    }
  }
}
```

## adapter

```json
{
  "tool": "adapter",
  "executable": "/example/verified-release/node.exe",
  "argv": [
    "/example/verified-release/runner.mjs",
    "invoke",
    "--request",
    "/example/repository/.publishraw/local/inspect-request.json",
    "--result",
    "/example/repository/.publishraw/local/inspect-result.json"
  ],
  "request": {
    "id": "a0f8faa8-94e2-4a94-9a2d-bf4b6facf4b7",
    "adapterProtocolVersion": 1,
    "adapter": {
      "id": "react-vite",
      "version": "0.0.1"
    },
    "context": {
      "repositoryRoot": "/example/repository",
      "siteRoot": "site",
      "mode": "bootstrap",
      "release": {
        "manifestPath": "/example/verified-release/manifest.json",
        "manifestUrl": "https://example.test/releases/0.0.1/manifest.json",
        "manifestSha256": "80ab6127748e9b6077d107e72912bbc14c41401469998bd08dad72c0bd828dac",
        "packageVersion": "0.0.1"
      }
    },
    "method": "inspect",
    "params": {
      "compatibilityProfileId": "vite-routerless"
    }
  }
}
```
