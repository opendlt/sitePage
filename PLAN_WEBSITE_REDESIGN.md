# OpenDLT.org Website Redesign -- Master Plan

> **Version:** 1.0
> **Date:** 2026-02-27
> **Domain:** opendlt.org
> **Stack:** Static site -- vanilla HTML5, CSS3, JavaScript (ES6+) -- no build tools
> **Hosting:** GitHub Pages

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Sitemap](#2-sitemap)
3. [Page-by-Page Specifications](#3-page-by-page-specifications)
4. [UX Flow Narrative](#4-ux-flow-narrative)
5. [Visual System](#5-visual-system)
6. [Component Inventory](#6-component-inventory)
7. [Animation Plan](#7-animation-plan)
8. [Accessibility](#8-accessibility)
9. [SEO](#9-seo)
10. [Performance Budgets](#10-performance-budgets)
11. [Implementation Phases](#11-implementation-phases)
12. [Risks and Mitigations](#12-risks-and-mitigations)
13. [Acceptance Criteria](#13-acceptance-criteria)

---

## 1. Executive Summary

### 1.1 Goals

The OpenDLT.org redesign transforms the current single-page site into an 11-page static website that clearly communicates OpenDLT's role as the **open-source tooling layer for the Accumulate Protocol**. The redesign must:

- Position OpenDLT as the definitive developer platform for building on Accumulate.
- Showcase all five SDKs (Python, JavaScript, Rust, Dart, C#) with real code examples and installation paths.
- Present three active projects (Authrix, Infrix, Accuboard) with clear status, progress, and calls to action.
- Drive developers toward the primary CTA: **"Open Accumulate Studio"** at `https://studio.opendlt.org`.
- Establish trust and credibility with enterprise architects evaluating Accumulate integrations.
- Lower the barrier for open-source contributors by surfacing good-first-issue pathways and governance docs.
- Maintain the zero-build-tool philosophy: every page is hand-authored HTML/CSS/JS, deployable via GitHub Pages with no compilation step.

### 1.2 Target Audiences

| Audience | What They Need | Where We Send Them |
|---|---|---|
| **Blockchain Developers** | SDKs, code samples, DevNet, API references | Tooling Hub, SDK pages, DevNet page |
| **Enterprise Architects** | Security posture, protocol maturity, integration patterns, case studies | About page, Authrix page, Docs |
| **Open-Source Contributors** | Roadmaps, contribution guides, issue boards, governance | Projects Hub, individual project pages, GitHub links |
| **Evaluators / Decision-Makers** | High-level value proposition, ecosystem breadth, competitive positioning | Home page, About page |

### 1.3 Positioning Statement

> **OpenDLT is the open-source tooling layer for the Accumulate Protocol** -- providing SDKs, developer environments, and production-grade projects that make it practical to build identity, smart contracts, and verifiable compute on Accumulate's blockchain-of-blockchains architecture.

### 1.4 Key Messaging Pillars

1. **Build in your language.** Five SDKs, one protocol. Python, JavaScript, Rust, Dart, or C# -- pick the one your team already knows.
2. **Ship faster with Studio.** Accumulate Studio is a browser-based IDE that lets you create identities, sign transactions, and inspect the network without leaving your browser.
3. **Identity without borders.** Authrix delivers universal DIDs (`did:authrix`) that work across every blockchain, not just Accumulate.
4. **Smart contracts, done differently.** Infrix brings WASM-based smart contracts to Accumulate, composable and portable.
5. **Open by default.** Every SDK, every tool, every project is MIT-licensed and community-governed.

### 1.5 Primary and Secondary CTAs

| Priority | Label | Destination | Context |
|---|---|---|---|
| **Primary** | Open Accumulate Studio | `https://studio.opendlt.org` | Hero, Tooling Hub, sticky nav |
| Secondary | Pick an SDK | `/tooling/sdks/` | Hero, Tooling Hub |
| Secondary | Run DevNet Locally | `/tooling/devnet/` | Tooling Hub, SDK pages |
| Secondary | Contribute | GitHub repos / contribution guide | Footer, project pages, About |

### 1.6 Branding Notes

- The universal DID project is named **Authrix** (not Lattica).
- The DID method is `did:authrix` (not `did:lattica`).
- All references to "Lattica" in the existing codebase must be replaced with "Authrix" during implementation.
- The OpenDLT logo and favicon remain unchanged.

---

## 2. Sitemap

```
opendlt.org
|
+-- / .......................... Home (landing page)
|
+-- /tooling/ .................. Tooling Hub (overview of all developer tools)
|   +-- /tooling/sdks/ ......... SDKs (tabbed interface for all 5 SDKs)
|   +-- /tooling/studio/ ....... Accumulate Studio (browser IDE)
|   +-- /tooling/devnet/ ....... DevNet (local development network)
|
+-- /projects/ ................. Projects Hub (overview of all projects)
|   +-- /projects/authrix/ ..... Authrix (Universal DIDs)
|   +-- /projects/infrix/ ...... Infrix (WASM Smart Contracts)
|   +-- /projects/accuboard/ ... Accuboard (Oracle & Verifiable Compute)
|
+-- /about/ .................... About (team, mission, governance)
|
+-- /docs/ ..................... Docs (documentation hub / external link gateway)
```

**Total: 11 pages**

### Navigation Structure

```
[Logo: OpenDLT]   Home   Tooling v   Projects v   About   Docs   [Open Studio ->]

                          |               |
                   Tooling Hub      Projects Hub
                     SDKs             Authrix
                    Studio             Infrix
                    DevNet           Accuboard
```

- Desktop: horizontal nav with two dropdowns (Tooling, Projects) + primary CTA button.
- Mobile: hamburger menu with accordion sub-menus.

---

## 3. Page-by-Page Specifications

---

### 3.1 Home (`/index.html`)

**Purpose:** First impression. Communicate what OpenDLT is, why it matters, and where to go next.

**Layout:** Full-viewport hero, then three content bands, then footer.

#### Section A -- Hero

```
[Badge] The open-source tooling layer for Accumulate

# Build on Accumulate.
# Ship with Confidence.

OpenDLT gives you SDKs in five languages, a browser IDE, a local
DevNet, and production-grade projects -- everything you need to
build decentralized applications on the Accumulate Protocol.

[Open Accumulate Studio]  [Pick an SDK ->]
```

- Background: subtle animated grid or particle field on `--darker` base.
- Badge is a small pill element styled with `--primary` border.

#### Section B -- Tooling Highlights (3-card row)

```
--- Card 1 ---
Icon: terminal prompt
Title: Multi-Language SDKs
Body: Python, JavaScript, Rust, Dart, and C#. Install in one
      command. Full Accumulate protocol coverage.
Link: Explore SDKs ->

--- Card 2 ---
Icon: browser window
Title: Accumulate Studio
Body: Create identities, sign transactions, and inspect the
      network -- all from your browser. No local setup required.
Link: Open Studio ->

--- Card 3 ---
Icon: server rack
Title: Local DevNet
Body: Spin up a full Accumulate network on your machine in
      seconds. Test without mainnet gas fees.
Link: Run DevNet ->
```

#### Section C -- Projects Showcase (3-card row with progress)

```
--- Card 1 ---
Logo: Authrix logo
Title: Authrix -- Universal DIDs
Status badge: Alpha
Progress bar: ~72%
Body: One DID, every blockchain. The did:authrix method delivers
      cross-chain identity that is portable, private, and sovereign.
Link: Learn More ->

--- Card 2 ---
Logo: Infrix logo
Title: Infrix -- WASM Smart Contracts
Status badge: Beta
Progress bar: ~60%
Body: Write smart contracts in any language that compiles to
      WebAssembly. Deploy to Accumulate with deterministic execution.
Link: Learn More ->

--- Card 3 ---
Logo: Accuboard logo
Title: Accuboard -- Oracle & Verifiable Compute
Status badge: Concept
Progress bar: ~25%
Body: Bring off-chain data on-chain with cryptographic proofs.
      Verifiable compute for trustless oracle networks.
Link: Learn More ->
```

#### Section D -- Quick-Start Code Block

```
Heading: Start building in 30 seconds

Tab bar: [Python] [JavaScript] [Rust] [Dart] [C#]

--- Python tab (active) ---
```python
pip install accumulate-sdk

from accumulate import Client

client = Client("https://mainnet.accumulatenetwork.io")
identity = client.create_identity("my-first-adi")
print(f"Created: {identity.url}")
```

--- JavaScript tab ---
```javascript
npm install @opendlt/accumulate-sdk

import { Client } from '@opendlt/accumulate-sdk';

const client = new Client('https://mainnet.accumulatenetwork.io');
const identity = await client.createIdentity('my-first-adi');
console.log(`Created: ${identity.url}`);
```

--- Rust tab ---
```rust
// Cargo.toml: accumulate-sdk = "0.1"
use accumulate_sdk::Client;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new("https://mainnet.accumulatenetwork.io").await?;
    let identity = client.create_identity("my-first-adi").await?;
    println!("Created: {}", identity.url());
    Ok(())
}
```

--- Dart tab ---
```dart
// pubspec.yaml: accumulate_sdk: ^0.1.0
import 'package:accumulate_sdk/accumulate_sdk.dart';

void main() async {
  final client = AccumulateClient(
    endpoint: 'https://mainnet.accumulatenetwork.io',
  );
  final identity = await client.createIdentity('my-first-adi');
  print('Created: ${identity.url}');
}
```

--- C# tab ---
```csharp
// dotnet add package Accumulate.SDK
using Accumulate;

var client = new AccumulateClient("https://mainnet.accumulatenetwork.io");
var identity = await client.CreateIdentityAsync("my-first-adi");
Console.WriteLine($"Created: {identity.Url}");
```
```

#### Section E -- Social Proof / Stats Bar

```
[5 SDKs]   [3 Active Projects]   [100% Open Source]   [MIT Licensed]
```

#### Section F -- Footer

See shared footer specification in section 3.11.

---

### 3.2 Tooling Hub (`/tooling/index.html`)

**Purpose:** Overview of all developer tools. Entry point for SDK selection, Studio access, and DevNet setup.

#### Hero

```
# Developer Tooling

Everything you need to build, test, and deploy on Accumulate --
from your first line of code to production.

[Open Accumulate Studio]  [Browse SDKs ->]
```

#### Body -- Three Feature Sections

**Section 1: SDKs**

```
## Multi-Language SDKs

Accumulate SDKs are available in five languages. Each SDK provides
full protocol coverage: identity management, account creation,
transaction signing, token operations, and data entries.

| Language   | Package Manager     | Install Command                    | Status |
|------------|--------------------|------------------------------------|--------|
| Python     | pip                | pip install accumulate-sdk         | Stable |
| JavaScript | npm                | npm install @opendlt/accumulate-sdk| Stable |
| Rust       | Cargo              | accumulate-sdk = "0.1"             | Stable |
| Dart       | pub                | accumulate_sdk: ^0.1.0             | Stable |
| C#         | NuGet              | dotnet add package Accumulate.SDK  | Beta   |

[View All SDKs ->]
```

**Section 2: Accumulate Studio**

```
## Accumulate Studio

A browser-based IDE for the Accumulate Protocol. Studio provides a
visual interface for:

- Creating and managing ADIs (Accumulate Digital Identifiers)
- Signing and submitting transactions
- Inspecting blocks, transactions, and accounts
- Managing key books and key pages
- Switching between MainNet, TestNet, and local DevNet

No installation. No wallet extension. Just open your browser.

[Open Accumulate Studio ->]
```

**Section 3: DevNet**

```
## Local DevNet

Run a complete Accumulate network on your local machine for
development and testing. DevNet gives you:

- Full protocol support with instant block finality
- Pre-funded test accounts for immediate experimentation
- Docker-based setup: one command to start, one to stop
- Compatible with all five SDKs and Studio

[Set Up DevNet ->]
```

---

### 3.3 SDKs (`/tooling/sdks/index.html`)

**Purpose:** Detailed view of all five SDKs with installation, code examples, API links, and GitHub repos.

#### Hero

```
# Accumulate SDKs

Five languages. One protocol. Full coverage.

Choose the SDK that fits your stack and start building in minutes.
```

#### Tabbed SDK Interface

Each tab contains:

1. **Language name and icon** (tab label)
2. **Description paragraph** (what the SDK is for, who it is best suited for)
3. **Installation block** (copy-to-clipboard install command)
4. **Quick-start code example** (create identity, create account)
5. **Feature checklist** (protocol coverage)
6. **Links row:** `[GitHub Repo]  [API Docs]  [Changelog]`

**Python tab copy:**

```
## Accumulate Python SDK

The Python SDK is ideal for rapid prototyping, scripting, data
analysis pipelines, and backend services. It supports async/await
patterns, ships with comprehensive type hints, and includes CLI
utilities for common operations.

### Install
pip install accumulate-sdk

### Features
- Complete Accumulate protocol coverage
- ADI and sub-identity management
- Token account creation and transfers
- Data entry writing and querying
- Transaction signing with Ed25519 and RCD1
- Key book and key page management
- Async/await support throughout
- Type hints for IDE autocompletion
- CLI tools for common operations

[GitHub] [API Reference] [Changelog]
```

**JavaScript tab copy:**

```
## Accumulate JavaScript SDK

The JavaScript SDK supports both Node.js backends and browser-based
applications. It is the natural choice for web dApps, Electron
desktop apps, and serverless functions. Ships as an ES module with
full TypeScript declarations.

### Install
npm install @opendlt/accumulate-sdk

### Features
- ES module with TypeScript declarations
- Node.js and browser compatible
- Promise-based async API
- ADI and account management
- Token operations and transfers
- Data entries and queries
- Ed25519 signing with Web Crypto API fallback
- Tree-shakeable for smaller bundles

[GitHub] [API Reference] [Changelog]
```

**Rust tab copy:**

```
## Accumulate Rust SDK

The Rust SDK is designed for performance-critical applications,
system-level integrations, and environments where memory safety is
non-negotiable. Zero-cost abstractions, no runtime overhead.

### Install (Cargo.toml)
[dependencies]
accumulate-sdk = "0.1"

### Features
- Zero-cost abstractions over the Accumulate API
- Async runtime support (tokio)
- Strong typing with serde serialization
- Ed25519 signing with ring or ed25519-dalek
- Comprehensive error types
- no_std compatible core (optional)
- Full protocol coverage

[GitHub] [API Reference] [Changelog]
```

**Dart tab copy:**

```
## Accumulate Dart SDK

The Dart SDK is built for Flutter mobile applications and
cross-platform development. It powers the Accumulate mobile wallet
and is optimized for reactive UI patterns.

### Install (pubspec.yaml)
dependencies:
  accumulate_sdk: ^0.1.0

### Features
- Flutter and Dart native
- iOS, Android, Web, Desktop support
- Async/await with Dart Futures
- ADI and account management
- Transaction building and signing
- Stream-based event subscriptions
- Null-safety throughout

[GitHub] [API Reference] [Changelog]
```

**C# tab copy:**

```
## Accumulate C# SDK

The C# SDK targets the .NET ecosystem: ASP.NET backends, Unity
game integrations, Xamarin mobile apps, and enterprise Windows
services. Ships as a NuGet package with XML documentation.

### Install
dotnet add package Accumulate.SDK

### Features
- .NET 6+ and .NET Standard 2.1 support
- Async/await with Task-based patterns
- LINQ-friendly query API
- ADI and account management
- Transaction signing and submission
- XML documentation for IntelliSense
- Unity-compatible subset available

[GitHub] [API Reference] [Changelog]
```

---

### 3.4 Studio (`/tooling/studio/index.html`)

**Purpose:** Dedicated landing page for Accumulate Studio. Explain what it is, show screenshots, drive users to open it.

#### Hero

```
# Accumulate Studio

The browser-based IDE for the Accumulate Protocol.
Create identities. Sign transactions. Inspect the network.
No installation required.

[Open Accumulate Studio ->] https://studio.opendlt.org
```

#### Feature Grid (2x3)

```
--- Feature 1 ---
Icon: user-plus
Title: Identity Management
Body: Create and manage ADIs, sub-identities, key books, and
      key pages with a visual interface.

--- Feature 2 ---
Icon: edit
Title: Transaction Builder
Body: Construct, sign, and submit any Accumulate transaction
      type. Review before you send.

--- Feature 3 ---
Icon: search
Title: Network Inspector
Body: Browse blocks, look up transactions by hash, and inspect
      account state in real time.

--- Feature 4 ---
Icon: key
Title: Key Management
Body: Generate key pairs, import existing keys, and manage
      signing authorities without a wallet extension.

--- Feature 5 ---
Icon: globe
Title: Multi-Network
Body: Switch between MainNet, TestNet, and your local DevNet
      with a single dropdown.

--- Feature 6 ---
Icon: code
Title: API Playground
Body: Send raw API calls to any Accumulate endpoint. View
      formatted JSON responses.
```

#### Screenshot / Demo Section

```
[Full-width screenshot of Studio interface]

Caption: Accumulate Studio running against TestNet, showing the
         identity management view.
```

#### CTA Bar

```
Studio is free, open-source, and runs entirely in your browser.
Your keys never leave your machine.

[Open Accumulate Studio ->]  [View Source on GitHub ->]
```

---

### 3.5 DevNet (`/tooling/devnet/index.html`)

**Purpose:** Guide developers through setting up a local Accumulate DevNet.

#### Hero

```
# Local DevNet

Run a complete Accumulate network on your machine.
Instant finality. Pre-funded accounts. Zero gas fees.

[Get Started ->]
```

#### Prerequisites

```
## Prerequisites

- Docker Desktop 4.x+ (or Docker Engine + Docker Compose)
- 4 GB available RAM
- 2 GB available disk space
- Any OS: macOS, Linux, Windows (WSL2)
```

#### Setup Steps

```
## Quick Start

### 1. Pull the DevNet image
docker pull ghcr.io/opendlt/accumulate-devnet:latest

### 2. Start the network
docker compose up -d

### 3. Verify it is running
curl http://localhost:26660/v3 | jq .

### 4. Connect your SDK
client = Client("http://localhost:26660")

### 5. Connect Studio
Open Studio -> Settings -> Network -> http://localhost:26660
```

#### Pre-Funded Accounts Table

```
## Pre-Funded Test Accounts

| Account URL                          | Token Balance | Key (hex)       |
|--------------------------------------|---------------|-----------------|
| acc://devnet-faucet/acme             | 1,000,000 ACME| (auto-generated)|
| acc://devnet-validator-1/staking     | 500,000 ACME  | (auto-generated)|

Keys are printed to stdout when DevNet starts. Use them with any SDK.
```

#### Troubleshooting

```
## Troubleshooting

**Port conflict on 26660:**
Change the port mapping in docker-compose.yml:
  ports:
    - "36660:26660"

**DevNet won't start on Apple Silicon:**
Ensure you are using the linux/arm64 image variant:
  docker pull ghcr.io/opendlt/accumulate-devnet:latest --platform linux/arm64

**Reset all state:**
docker compose down -v && docker compose up -d
```

---

### 3.6 Projects Hub (`/projects/index.html`)

**Purpose:** Overview of all OpenDLT projects. Show status, progress, and links to individual project pages.

#### Hero

```
# Projects

OpenDLT builds production-grade infrastructure on top of the
Accumulate Protocol. Each project is open-source, community-governed,
and MIT-licensed.

[Contribute on GitHub ->]
```

#### Project Cards (3 cards, full-width)

Each card includes: logo, name, tagline, status badge, progress bar with percentage, description paragraph, tech tags, and action links.

```
--- Card 1 ---
Logo: Authrix
Title: Authrix
Tagline: Universal Decentralized Identifiers
Status: Alpha
Progress: ~72%
Body:
  Authrix implements the did:authrix DID method -- the world's first
  universal cross-chain decentralized identity system. One DID works
  on every blockchain. Authrix DIDs are portable, privacy-preserving,
  and fully self-sovereign. Built on Accumulate's identity-first
  architecture.

  Key capabilities:
  - did:authrix method specification and resolver
  - Cross-chain identity anchoring
  - Verifiable credential issuance and verification
  - Privacy-preserving selective disclosure
  - W3C DID Core and Verifiable Credentials compliant

Tags: [DID] [Identity] [Cross-chain] [W3C] [Privacy]
Links: [Learn More ->] [GitHub ->]

--- Card 2 ---
Logo: Infrix
Title: Infrix
Tagline: WASM Smart Contracts for Accumulate
Status: Beta
Progress: ~60%
Body:
  Infrix brings WebAssembly smart contracts to the Accumulate Protocol.
  Write contracts in Rust, AssemblyScript, or any language that
  compiles to WASM. Deploy to Accumulate with deterministic execution,
  metered gas, and composable contract-to-contract calls.

  Key capabilities:
  - WASM execution engine with metered gas
  - Contract deployment and invocation API
  - Cross-contract calls and composability
  - Rust and AssemblyScript contract templates
  - Integration with Accumulate identities and token accounts

Tags: [WASM] [Smart Contracts] [Rust] [AssemblyScript] [Composable]
Links: [Learn More ->] [GitHub ->]

--- Card 3 ---
Logo: Accuboard
Title: Accuboard
Tagline: Oracle & Verifiable Compute
Status: Concept
Progress: ~25%
Body:
  Accuboard brings off-chain data on-chain with cryptographic proofs.
  It provides a verifiable compute framework for building trustless
  oracle networks, data feeds, and computation verification on top of
  Accumulate.

  Key capabilities:
  - Off-chain data attestation with on-chain proofs
  - Verifiable compute execution environment
  - Oracle network node framework
  - Data feed aggregation and consensus
  - Integration with Accumulate data entries

Tags: [Oracle] [Verifiable Compute] [Data Feeds] [Proofs] [Attestation]
Links: [Learn More ->] [GitHub ->]
```

#### Contribution CTA

```
## Get Involved

Every project has tagged issues for new contributors. Pick a project,
find a good-first-issue, and open your first pull request.

[Browse Good First Issues ->]
```

---

### 3.7 Authrix (`/projects/authrix/index.html`)

**Purpose:** Deep-dive into the Authrix universal DID project.

#### Hero

```
# Authrix
## Universal Decentralized Identifiers

One DID. Every blockchain. Portable, private, sovereign.

Status: Alpha  |  Progress: ~72%  |  License: MIT

[View on GitHub ->]  [Read the Spec ->]
```

#### The Problem

```
## The Problem

Decentralized identity is fragmented. Each blockchain has its own
DID method, its own resolver, its own credential format. If you
create a DID on Ethereum, it does not exist on Solana. If you issue
a credential on Accumulate, it cannot be verified on Cosmos.

Developers building cross-chain applications must integrate multiple
identity systems, each with different APIs, different security
models, and different trust assumptions.
```

#### The Solution

```
## Authrix: One DID, Every Chain

The did:authrix method specification defines a universal DID that
is anchored on Accumulate but resolvable across any blockchain with
a light client or bridge.

did:authrix:acc://alice.acme

This single identifier can:
- Authenticate on Ethereum, Solana, Cosmos, and 20+ networks
- Issue and hold Verifiable Credentials (W3C VC 2.0)
- Perform selective disclosure with zero-knowledge proofs
- Rotate keys without changing the DID itself
- Delegate authentication to sub-identities
```

#### Architecture Diagram (described for implementation)

```
## Architecture

[Diagram placeholder: show Accumulate root -> DID Document ->
cross-chain anchors -> verifier on each target chain]

Components:
1. DID Document Store (on Accumulate)
2. Cross-Chain Anchor Service
3. Universal Resolver
4. Credential Issuance SDK
5. Verifier Libraries (per-chain)
```

#### Roadmap

```
## Roadmap

| Milestone                          | Status      |
|------------------------------------|-------------|
| did:authrix method spec draft      | Complete    |
| Resolver prototype                 | Complete    |
| Accumulate DID Document CRUD       | Complete    |
| Credential issuance MVP            | In Progress |
| Cross-chain anchoring (Ethereum)   | In Progress |
| Selective disclosure (ZKP)         | Planned     |
| W3C DID WG registration            | Planned     |
| Production-ready resolver          | Planned     |
```

#### Get Started

```
## Get Started with Authrix

### Install the SDK
pip install authrix

### Create your first DID
from authrix import DIDManager

manager = DIDManager(network="testnet")
did = manager.create("alice")
print(did)  # did:authrix:acc://alice.acme

### Resolve a DID
doc = manager.resolve("did:authrix:acc://alice.acme")
print(doc.verification_methods)
```

---

### 3.8 Infrix (`/projects/infrix/index.html`)

**Purpose:** Deep-dive into the Infrix WASM smart contracts project.

#### Hero

```
# Infrix
## WASM Smart Contracts for Accumulate

Write once. Compile to WASM. Deploy to Accumulate.

Status: Beta  |  Progress: ~60%  |  License: MIT

[View on GitHub ->]  [Read the Docs ->]
```

#### The Problem

```
## The Problem

Smart contract platforms are siloed. Solidity contracts only run on
EVM chains. Move contracts only run on Aptos and Sui. Developers
must learn new languages and new toolchains for every chain.

Accumulate's identity-first architecture needs a smart contract
system that matches its design: composable, portable, and
identity-aware.
```

#### The Solution

```
## Infrix: WASM Smart Contracts

Infrix is a WebAssembly execution engine for the Accumulate Protocol.
Write your contract in any language that compiles to WASM -- Rust,
AssemblyScript, C, or Go -- and deploy it to Accumulate.

Key properties:
- Deterministic execution with metered gas
- Identity-aware: contracts can read and write ADI state
- Composable: contracts can call other contracts
- Portable: the same WASM binary can run in testing, staging,
  and production environments
- Auditable: WASM bytecode is inspectable and verifiable
```

#### Example Contract

```
## Example: Token Gating Contract (Rust)

use infrix_sdk::prelude::*;

#[infrix::contract]
pub struct TokenGate {
    required_balance: u64,
    token_account: String,
}

#[infrix::methods]
impl TokenGate {
    pub fn check_access(&self, caller: &Identity) -> bool {
        let balance = self.query_balance(
            &caller.url(),
            &self.token_account,
        );
        balance >= self.required_balance
    }
}
```

#### Roadmap

```
## Roadmap

| Milestone                          | Status      |
|------------------------------------|-------------|
| WASM execution engine core         | Complete    |
| Gas metering system                | Complete    |
| Rust contract SDK                  | Complete    |
| Contract deployment API            | Complete    |
| Cross-contract calls               | In Progress |
| AssemblyScript SDK                 | In Progress |
| Identity-aware state access        | Planned     |
| Contract upgrade mechanism         | Planned     |
| Mainnet deployment                 | Planned     |
```

---

### 3.9 Accuboard (`/projects/accuboard/index.html`)

**Purpose:** Introduce the Accuboard oracle and verifiable compute project (early stage).

#### Hero

```
# Accuboard
## Oracle & Verifiable Compute

Bring off-chain data on-chain. Prove computation. Trust nothing.

Status: Concept  |  Progress: ~25%  |  License: MIT

[View on GitHub ->]  [Join the Discussion ->]
```

#### Vision

```
## Vision

Blockchains are isolated from the real world. Oracles bridge that
gap, but most oracle networks require you to trust a committee of
nodes. Accuboard takes a different approach: every piece of off-chain
data and every off-chain computation comes with a cryptographic proof
that can be verified on-chain.

Accuboard combines:
- TLS-notarized web proofs for data attestation
- Verifiable compute (VC) for off-chain execution
- Accumulate data entries for on-chain anchoring
- A node framework for building oracle networks
```

#### Use Cases

```
## Use Cases

### Price Feeds
Attest to exchange prices with TLS proofs. No trusted committee.

### Off-Chain ML Inference
Run a machine learning model off-chain and submit a verifiable
proof of the result on-chain.

### API Data Bridging
Bring any REST API response on-chain with a cryptographic
attestation of the response body and headers.

### Regulatory Compliance Checks
Verify KYC/AML status off-chain and submit a zero-knowledge
proof of compliance without revealing personal data.
```

#### Status

```
## Current Status

Accuboard is in the concept and early prototyping phase. The core
architecture is defined and the data attestation proof-of-concept
is under development. Community input is actively sought on the
design and prioritization of features.

### What Exists Today
- Architecture design document
- Data attestation proof-of-concept
- Node framework skeleton

### What Is Next
- TLS notarization integration
- Verifiable compute engine selection
- Oracle node incentive model design
- TestNet integration testing

[Join the GitHub Discussion ->]
```

---

### 3.10 About (`/about/index.html`)

**Purpose:** Tell the OpenDLT story. Explain the relationship to Accumulate. Describe governance.

#### Hero

```
# About OpenDLT

The open-source tooling layer for the Accumulate Protocol.
```

#### Mission

```
## Mission

OpenDLT exists to make the Accumulate Protocol accessible to every
developer, in every language, on every platform. We build the SDKs,
tools, and infrastructure projects that turn Accumulate's protocol
design into practical, production-grade software.

We believe that:
- Developer tools should be open-source and community-governed.
- Language choice should never be a barrier to blockchain development.
- Identity should be portable, private, and self-sovereign.
- Infrastructure should be verifiable and trustless.
```

#### Relationship to Accumulate

```
## Accumulate Protocol

Accumulate is a blockchain-of-blockchains protocol with an
identity-first architecture. Every account is a human-readable
URL. Every identity can hold tokens, data, and credentials.

OpenDLT is an independent, community-driven organization that
builds developer tooling for Accumulate. We are not the protocol
team -- we are the ecosystem team. We consume Accumulate's APIs
and build on top of them, just like any other developer.

Learn more about Accumulate: https://accumulatenetwork.io
```

#### Governance

```
## Governance

OpenDLT projects are governed by their contributors. Key decisions
are made through:

- **RFCs** -- Significant design changes go through a Request for
  Comments process on GitHub Discussions.
- **Maintainer consensus** -- Each project has a set of maintainers
  who review and merge pull requests.
- **Community votes** -- Major directional decisions (new projects,
  deprecations, license changes) are put to a community vote.

All governance processes are documented in the GOVERNANCE.md file
in each project repository.
```

#### Contributing

```
## Contributing

We welcome contributions of all kinds: code, documentation, design,
testing, and community support.

### Getting Started
1. Browse our repositories: https://github.com/opendlt
2. Look for issues tagged `good-first-issue`
3. Read the CONTRIBUTING.md in the relevant repository
4. Fork, branch, code, test, and open a pull request

### Code of Conduct
All OpenDLT projects follow the Contributor Covenant Code of Conduct.
We are committed to providing a welcoming and inclusive environment
for everyone.

[View Open Issues ->]  [Read Code of Conduct ->]
```

---

### 3.11 Docs (`/docs/index.html`)

**Purpose:** Documentation hub. Links to SDK docs, project docs, protocol docs, and tutorials.

#### Hero

```
# Documentation

Guides, references, and tutorials for everything in the OpenDLT
ecosystem.
```

#### Documentation Categories (card grid)

```
--- Card 1 ---
Icon: book
Title: Getting Started
Body: New to OpenDLT? Start here. Set up your environment,
      install an SDK, and build your first application.
Link: Read Guide ->

--- Card 2 ---
Icon: code
Title: SDK References
Body: Complete API documentation for all five Accumulate SDKs.
      Python | JavaScript | Rust | Dart | C#
Link: Browse SDKs ->

--- Card 3 ---
Icon: wrench
Title: Studio Guide
Body: How to use Accumulate Studio: identity management,
      transaction building, and network inspection.
Link: Open Guide ->

--- Card 4 ---
Icon: server
Title: DevNet Setup
Body: Run a local Accumulate network for development and testing.
      Docker-based, one-command setup.
Link: Setup Guide ->

--- Card 5 ---
Icon: shield
Title: Authrix Docs
Body: The did:authrix method specification, resolver API, and
      credential issuance guide.
Link: Read Docs ->

--- Card 6 ---
Icon: cpu
Title: Infrix Docs
Body: Writing, deploying, and testing WASM smart contracts on
      Accumulate with Infrix.
Link: Read Docs ->

--- Card 7 ---
Icon: database
Title: Accuboard Docs
Body: Architecture overview and proof-of-concept documentation
      for the oracle and verifiable compute framework.
Link: Read Docs ->

--- Card 8 ---
Icon: link
Title: Accumulate Protocol
Body: Protocol-level documentation maintained by the Accumulate
      core team. RPC API, consensus, and architecture.
Link: Visit Accumulate Docs -> (external)
```

#### Search (future enhancement)

```
Note: Full-text documentation search will be added in Phase 6
using a client-side index (e.g., lunr.js or pagefind).
```

---

### 3.12 Shared Footer (all pages)

```
-----------------------------------------------------------
[OpenDLT Logo]

Tooling              Projects             Community
  SDKs                 Authrix              GitHub
  Studio               Infrix               Twitter / X
  DevNet               Accuboard            Discord
  Docs                                      Contributing

-----------------------------------------------------------
(c) 2026 OpenDLT. MIT Licensed. Building on Accumulate.

[GitHub icon]  [Twitter icon]  [Discord icon]
-----------------------------------------------------------
```

---

## 4. UX Flow Narrative

### First 60 Seconds

This describes the ideal experience for a blockchain developer landing on opendlt.org for the first time.

**0-3 seconds (Perception):**
The page loads in under 1.5 seconds on a 4G connection. The loading screen fades away. The hero section fills the viewport with a dark background (`--darker`) and a prominent heading. The badge "The open-source tooling layer for Accumulate" provides immediate context. The animated grid in the background provides subtle visual interest without competing for attention.

**3-8 seconds (Comprehension):**
The developer reads the headline: "Build on Accumulate. Ship with Confidence." The subheading explains what OpenDLT provides: SDKs, a browser IDE, a local DevNet, and projects. Two CTAs are visible: "Open Accumulate Studio" (primary, high-contrast button) and "Pick an SDK" (secondary, understated). The sticky navigation shows the site structure: Home, Tooling, Projects, About, Docs.

**8-15 seconds (Decision):**
The developer has one of three immediate goals:
1. **"I want to try Studio."** They click the primary CTA and are taken to `studio.opendlt.org` in a new tab.
2. **"I want to install an SDK."** They click "Pick an SDK" and scroll (or are anchored) to the quick-start code block section. They see a tabbed interface with all five languages.
3. **"I want to understand the ecosystem."** They scroll down to see the tooling cards and project cards.

**15-30 seconds (Engagement):**
The developer who scrolled down now sees the three tooling cards (SDKs, Studio, DevNet) and the three project cards (Authrix, Infrix, Accuboard). Each project card has a status badge and progress bar that immediately communicates maturity. AOS scroll-reveal animations trigger as each section enters the viewport, providing a polished but not distracting experience.

**30-60 seconds (Action):**
The developer has either:
- Opened Studio in a new tab and is interacting with it.
- Copied an SDK install command and is running it in their terminal.
- Clicked through to a project page (most likely Authrix, as it has the highest completion percentage).
- Opened the SDKs page to compare languages and features.

### Key Design Principle

Every piece of content on the home page should either **explain what OpenDLT is** or **provide a direct path to doing something**. No decorative sections. No vague marketing copy. Every section earns its viewport space.

---

## 5. Visual System

### 5.1 Design Tokens -- Colors

```css
:root {
  /* Primary palette */
  --primary:    #0ea5e9;   /* Sky blue -- CTAs, links, interactive elements     */
  --secondary:  #8b5cf6;   /* Purple -- secondary accents, gradients            */
  --accent:     #10b981;   /* Emerald green -- success, status, progress bars   */

  /* Backgrounds */
  --dark:       #0f172a;   /* Slate 900 -- primary background                   */
  --darker:     #020617;   /* Slate 950 -- hero backgrounds, deep sections      */

  /* Text and borders */
  --light:      #e2e8f0;   /* Slate 200 -- primary text                         */
  --gray:       #64748b;   /* Slate 500 -- secondary text, captions             */
  --border:     #334155;   /* Slate 700 -- card borders, dividers               */

  /* Semantic colors */
  --success:    #10b981;   /* Same as accent -- positive states                 */
  --warning:    #f59e0b;   /* Amber 500 -- caution states, beta badges          */
  --error:      #ef4444;   /* Red 500 -- error states                           */
  --info:       #0ea5e9;   /* Same as primary -- informational states           */

  /* Gradient */
  --gradient-primary: linear-gradient(135deg, var(--primary), var(--secondary));
}
```

#### Color Usage Rules

- **Body background:** `--dark` (`#0f172a`)
- **Hero / deep sections:** `--darker` (`#020617`)
- **Card backgrounds:** `rgba(255, 255, 255, 0.03)` with `--border` border
- **Primary text:** `--light` (`#e2e8f0`)
- **Secondary text:** `--gray` (`#64748b`)
- **Links and interactive elements:** `--primary` (`#0ea5e9`)
- **Gradient text (headings):** `--gradient-primary` applied via `background-clip: text`
- **Primary buttons:** solid `--primary` background, white text
- **Secondary buttons:** transparent background, `--primary` border, `--primary` text
- **Ghost buttons:** transparent background, `--gray` text, no border

### 5.2 Design Tokens -- Typography

```css
:root {
  /* Font families */
  --font-body:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-code:  'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;

  /* Font sizes (rem, base 16px) */
  --text-xs:    0.75rem;    /* 12px */
  --text-sm:    0.875rem;   /* 14px */
  --text-base:  1rem;       /* 16px */
  --text-lg:    1.125rem;   /* 18px */
  --text-xl:    1.25rem;    /* 20px */
  --text-2xl:   1.5rem;     /* 24px */
  --text-3xl:   1.875rem;   /* 30px */
  --text-4xl:   2.25rem;    /* 36px */
  --text-5xl:   3rem;       /* 48px */
  --text-6xl:   3.75rem;    /* 60px */

  /* Line heights */
  --leading-tight:   1.25;
  --leading-snug:    1.375;
  --leading-normal:  1.5;
  --leading-relaxed: 1.625;
  --leading-loose:   2;

  /* Font weights */
  --font-light:      300;
  --font-regular:    400;
  --font-medium:     500;
  --font-semibold:   600;
  --font-bold:       700;
  --font-extrabold:  800;
}
```

#### Typography Scale

| Element | Size | Weight | Line Height | Font |
|---|---|---|---|---|
| Hero H1 | `--text-5xl` (48px), `--text-6xl` (60px) on desktop | Extrabold (800) | Tight (1.25) | Inter |
| Page H1 | `--text-4xl` (36px), `--text-5xl` (48px) on desktop | Bold (700) | Tight (1.25) | Inter |
| Section H2 | `--text-3xl` (30px) | Semibold (600) | Snug (1.375) | Inter |
| Card H3 | `--text-xl` (20px) | Semibold (600) | Snug (1.375) | Inter |
| Body | `--text-base` (16px) | Regular (400) | Relaxed (1.625) | Inter |
| Small / Captions | `--text-sm` (14px) | Regular (400) | Normal (1.5) | Inter |
| Code inline | `--text-sm` (14px) | Regular (400) | Normal (1.5) | JetBrains Mono |
| Code block | `--text-sm` (14px) | Regular (400) | Loose (2) | JetBrains Mono |
| Button | `--text-sm` (14px) | Medium (500) | Tight (1.25) | Inter |
| Badge | `--text-xs` (12px) | Medium (500) | Tight (1.25) | Inter |
| Nav link | `--text-sm` (14px) | Medium (500) | Tight (1.25) | Inter |

### 5.3 Design Tokens -- Spacing

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
}
```

#### Spacing Usage

| Context | Token | Value |
|---|---|---|
| Inline element padding | `--space-1` to `--space-2` | 4-8px |
| Button padding (vertical) | `--space-3` | 12px |
| Button padding (horizontal) | `--space-6` | 24px |
| Card internal padding | `--space-6` to `--space-8` | 24-32px |
| Section padding (vertical) | `--space-16` to `--space-20` | 64-80px |
| Grid gap | `--space-6` to `--space-8` | 24-32px |
| Container max-width | 1200px | -- |
| Container horizontal padding | `--space-6` (mobile), `--space-8` (desktop) | 24-32px |

### 5.4 Design Tokens -- Border Radius

```css
:root {
  --radius-sm:   8px;   /* Buttons, badges, small elements       */
  --radius-md:  12px;   /* Cards, input fields, dropdowns        */
  --radius-lg:  16px;   /* Modals, large containers, hero cards  */
  --radius-full: 9999px; /* Pills, avatar circles                */
}
```

### 5.5 Design Tokens -- Shadows and Effects

```css
:root {
  --shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md:  0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-lg:  0 10px 15px rgba(0, 0, 0, 0.3);
  --shadow-xl:  0 20px 25px rgba(0, 0, 0, 0.3);
  --shadow-glow-primary: 0 0 20px rgba(14, 165, 233, 0.15);
  --shadow-glow-secondary: 0 0 20px rgba(139, 92, 246, 0.15);
}
```

### 5.6 Layout Grid

- **Container:** `max-width: 1200px; margin: 0 auto; padding: 0 var(--space-6);`
- **Card grid:** CSS Grid, `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));`
- **Two-column layout (content + code):** `grid-template-columns: 1fr 1fr;` with stack on mobile
- **Breakpoints:**
  - Mobile: `< 768px` (single column, reduced spacing)
  - Tablet: `768px - 1024px` (two columns where appropriate)
  - Desktop: `> 1024px` (full layout)

---

## 6. Component Inventory

### 6.1 Cards

#### Standard Card

```html
<div class="card">
  <div class="card-icon"><!-- SVG icon --></div>
  <h3 class="card-title">Title</h3>
  <p class="card-body">Description text.</p>
  <a href="#" class="card-link">Learn More <span aria-hidden="true">-></span></a>
</div>
```

Styles:
- Background: `rgba(255, 255, 255, 0.03)`
- Border: `1px solid var(--border)`
- Border radius: `var(--radius-md)` (12px)
- Padding: `var(--space-6)` (24px)
- Hover: border color transitions to `var(--primary)`, subtle translateY(-2px)

#### Project Card (extended)

Adds: logo image, status badge, progress bar, tags row, action buttons.

#### SDK Card

Adds: language icon, install command (copy-to-clipboard), feature checklist.

### 6.2 Buttons

#### Primary Button

```html
<a href="#" class="btn btn-primary">Open Studio</a>
```

Styles:
- Background: `var(--primary)`
- Text: `#ffffff`
- Padding: `var(--space-3) var(--space-6)` (12px 24px)
- Border radius: `var(--radius-sm)` (8px)
- Font: `var(--text-sm)`, `var(--font-medium)`
- Hover: brightness(1.1), translateY(-1px)
- Active: brightness(0.95), translateY(0)
- Focus: 2px outline offset, `var(--primary)` color

#### Secondary Button

```html
<a href="#" class="btn btn-secondary">View SDKs</a>
```

Styles:
- Background: transparent
- Border: `1px solid var(--primary)`
- Text: `var(--primary)`
- Same padding, radius, font as primary
- Hover: background `rgba(14, 165, 233, 0.1)`
- Focus: same as primary

#### Ghost Button

```html
<a href="#" class="btn btn-ghost">Learn More <span aria-hidden="true">-></span></a>
```

Styles:
- Background: transparent
- Border: none
- Text: `var(--gray)`
- Hover: text color transitions to `var(--light)`
- Padding: `var(--space-2) 0` (inline context) or same as primary (block context)

### 6.3 Tabs

```html
<div class="tabs" role="tablist">
  <button class="tab active" role="tab" aria-selected="true" aria-controls="panel-python" id="tab-python">
    <img src="assets/langs/python.svg" alt="" aria-hidden="true">
    Python
  </button>
  <button class="tab" role="tab" aria-selected="false" aria-controls="panel-js" id="tab-js">
    <img src="assets/langs/javascript.svg" alt="" aria-hidden="true">
    JavaScript
  </button>
  <!-- ... more tabs -->
</div>

<div class="tab-panel active" role="tabpanel" id="panel-python" aria-labelledby="tab-python">
  <!-- Content -->
</div>
```

Styles:
- Tab bar: horizontal scroll on mobile, flex on desktop
- Active tab: bottom border `2px solid var(--primary)`, text color `var(--light)`
- Inactive tab: no bottom border, text color `var(--gray)`
- Tab panel: fade-in transition on switch
- Keyboard: Arrow keys navigate between tabs, Enter/Space activates

### 6.4 Badges

```html
<span class="badge badge-alpha">Alpha</span>
<span class="badge badge-beta">Beta</span>
<span class="badge badge-concept">Concept</span>
<span class="badge badge-stable">Stable</span>
```

Styles:
- Alpha: background `rgba(14, 165, 233, 0.15)`, text `var(--primary)`, border `var(--primary)`
- Beta: background `rgba(245, 158, 11, 0.15)`, text `var(--warning)`, border `var(--warning)`
- Concept: background `rgba(139, 92, 246, 0.15)`, text `var(--secondary)`, border `var(--secondary)`
- Stable: background `rgba(16, 185, 129, 0.15)`, text `var(--accent)`, border `var(--accent)`
- All: `var(--text-xs)`, `var(--font-medium)`, `var(--radius-full)`, padding `2px 10px`

### 6.5 Code Blocks

```html
<div class="code-block">
  <div class="code-header">
    <span class="code-lang">Python</span>
    <button class="code-copy" aria-label="Copy code to clipboard">
      <img src="assets/icons/copy.svg" alt="" aria-hidden="true">
      Copy
    </button>
  </div>
  <pre><code class="language-python">pip install accumulate-sdk</code></pre>
</div>
```

Styles:
- Background: `rgba(0, 0, 0, 0.4)`
- Border: `1px solid var(--border)`
- Border radius: `var(--radius-md)` (12px)
- Header: flex row, background `rgba(0, 0, 0, 0.2)`, border-bottom
- Code font: `var(--font-code)`, `var(--text-sm)`
- Line height: `var(--leading-loose)` for readability
- Horizontal scroll on overflow (no wrapping)
- Syntax highlighting: client-side via Prism.js (lightweight, loaded async)

### 6.6 Progress Bars

```html
<div class="progress" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" aria-label="Authrix progress: 72%">
  <div class="progress-bar" style="width: 72%">
    <span class="progress-label">72%</span>
  </div>
</div>
```

Styles:
- Track: `rgba(255, 255, 255, 0.05)`, height 8px, `var(--radius-full)`
- Bar: `var(--gradient-primary)`, animated width on scroll-into-view
- Label: `var(--text-xs)`, positioned to the right of the bar

### 6.7 Navigation

```html
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav-content">
      <a href="/" class="nav-logo" aria-label="OpenDLT home">
        <img src="/assets/icons/opendlt-logo.svg" alt="OpenDLT">
      </a>

      <div class="nav-links" id="nav-links">
        <a href="/" class="nav-link">Home</a>

        <div class="nav-dropdown">
          <button class="nav-link nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Tooling <span class="nav-chevron" aria-hidden="true"></span>
          </button>
          <div class="nav-dropdown-menu" role="menu">
            <a href="/tooling/" role="menuitem">Tooling Hub</a>
            <a href="/tooling/sdks/" role="menuitem">SDKs</a>
            <a href="/tooling/studio/" role="menuitem">Studio</a>
            <a href="/tooling/devnet/" role="menuitem">DevNet</a>
          </div>
        </div>

        <div class="nav-dropdown">
          <button class="nav-link nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Projects <span class="nav-chevron" aria-hidden="true"></span>
          </button>
          <div class="nav-dropdown-menu" role="menu">
            <a href="/projects/" role="menuitem">Projects Hub</a>
            <a href="/projects/authrix/" role="menuitem">Authrix</a>
            <a href="/projects/infrix/" role="menuitem">Infrix</a>
            <a href="/projects/accuboard/" role="menuitem">Accuboard</a>
          </div>
        </div>

        <a href="/about/" class="nav-link">About</a>
        <a href="/docs/" class="nav-link">Docs</a>
      </div>

      <a href="https://studio.opendlt.org" class="btn btn-primary nav-cta" target="_blank" rel="noopener">
        Open Studio
      </a>

      <button class="nav-hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-links">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </div>
</nav>
```

#### Desktop behavior:
- Fixed to top, `backdrop-filter: blur(12px)`, background `rgba(15, 23, 42, 0.8)`
- Dropdowns appear on hover (with 200ms delay to prevent accidental triggers) and on click
- "Open Studio" button always visible in top-right corner

#### Mobile behavior (< 768px):
- Logo and hamburger visible
- "Open Studio" CTA moves into the mobile menu
- Hamburger toggles a full-height slide-in panel from the right
- Dropdown sections become accordion toggles
- Focus trap: when mobile menu is open, Tab cycles only within the menu

### 6.8 Mobile Hamburger

The hamburger icon is three horizontal lines that animate into an X when active:

```css
.nav-hamburger.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.nav-hamburger.active .hamburger-line:nth-child(2) {
  opacity: 0;
}
.nav-hamburger.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
```

- Transition: 300ms ease
- Touch target: minimum 44x44px
- Visible only below 768px breakpoint

---

## 7. Animation Plan

### 7.1 AOS Scroll Reveal

All content sections use a lightweight AOS (Animate on Scroll) system built with IntersectionObserver (no external library). This is already partially implemented in the current codebase and will be extended.

#### Configuration

```javascript
const AOS_CONFIG = {
  rootMargin: '0px 0px -50px 0px',  // Trigger slightly before element is fully visible
  threshold: 0.1,                      // 10% of element must be visible
};
```

#### Animation Types

| Data Attribute | Effect | Duration |
|---|---|---|
| `data-aos="fade-up"` | Fade in + translate Y from 30px | 800ms |
| `data-aos="fade-in"` | Fade in only | 600ms |
| `data-aos="fade-left"` | Fade in + translate X from -30px | 800ms |
| `data-aos="fade-right"` | Fade in + translate X from 30px | 800ms |
| `data-aos="scale-up"` | Fade in + scale from 0.95 | 600ms |

#### Staggered Delays

Cards in a grid use `data-aos-delay` to stagger their appearance:

```html
<div class="card" data-aos="fade-up" data-aos-delay="0">...</div>
<div class="card" data-aos="fade-up" data-aos-delay="100">...</div>
<div class="card" data-aos="fade-up" data-aos-delay="200">...</div>
```

### 7.2 Hover Effects

| Element | Effect |
|---|---|
| Cards | `translateY(-2px)`, border-color to `var(--primary)`, `box-shadow: var(--shadow-glow-primary)` |
| Primary buttons | `brightness(1.1)`, `translateY(-1px)` |
| Secondary buttons | background fills to `rgba(14, 165, 233, 0.1)` |
| Ghost buttons / links | text color transitions to `var(--light)` |
| Nav links | underline slides in from left |
| Code copy button | background lightens |

All hover transitions: `300ms ease` default, `150ms ease` for buttons.

### 7.3 Micro-Animations

| Element | Animation |
|---|---|
| Progress bars | Width animates from 0 to target on scroll-into-view, 1200ms ease-out |
| Tab content | Fade-in on tab switch, 300ms |
| Mobile menu | Slide-in from right, 300ms ease |
| Dropdown menus | Fade-in + translateY(-4px), 200ms |
| Loading screen | Fade-out after page load, 400ms |
| Copy-to-clipboard | "Copied!" tooltip appears for 2 seconds |
| Hero badge | Subtle pulse glow on `--primary` border |

### 7.4 Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

The AOS JavaScript also checks `window.matchMedia('(prefers-reduced-motion: reduce)')` and skips observer setup if true, rendering all elements immediately visible.

---

## 8. Accessibility

### 8.1 Standard

Target: **WCAG 2.1 Level AA** compliance across all 11 pages.

### 8.2 Skip Link

Every page includes a skip link as the first focusable element:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-4);
  padding: var(--space-3) var(--space-6);
  background: var(--primary);
  color: #ffffff;
  border-radius: var(--radius-sm);
  z-index: 10000;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

.skip-link:focus {
  top: var(--space-4);
}
```

### 8.3 Keyboard Navigation

| Component | Keyboard Behavior |
|---|---|
| Navigation links | Tab to focus, Enter to activate |
| Dropdown menus | Enter/Space to open, Escape to close, Arrow keys to navigate items |
| Tab components | Arrow Left/Right to switch tabs, Tab to enter panel content |
| Hamburger menu | Enter/Space to toggle, Escape to close, focus trap when open |
| Code copy buttons | Enter/Space to copy, visual confirmation |
| Cards (with links) | Tab focuses the card link, Enter to navigate |
| Modals (if any) | Escape to close, focus trap, return focus to trigger on close |

### 8.4 Focus Styles

```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Remove outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

### 8.5 ARIA Labels and Roles

- All images have descriptive `alt` text. Decorative images use `alt=""` and `aria-hidden="true"`.
- Navigation landmarks: `<nav role="navigation" aria-label="Main navigation">`.
- Main content: `<main id="main-content" role="main">`.
- Tab components use `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`.
- Dropdown triggers use `aria-expanded` and `aria-haspopup`.
- Progress bars use `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-label`.
- Icon-only buttons include `aria-label` (e.g., hamburger, copy, social links).
- Status badges are announced: `<span class="badge" role="status">Alpha</span>`.

### 8.6 Color Contrast

All text/background combinations must meet WCAG AA contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text):

| Foreground | Background | Ratio | Pass? |
|---|---|---|---|
| `--light` (#e2e8f0) | `--dark` (#0f172a) | 12.4:1 | Yes |
| `--light` (#e2e8f0) | `--darker` (#020617) | 15.4:1 | Yes |
| `--gray` (#64748b) | `--dark` (#0f172a) | 4.6:1 | Yes (AA) |
| `--primary` (#0ea5e9) | `--dark` (#0f172a) | 5.7:1 | Yes |
| `#ffffff` | `--primary` (#0ea5e9) | 3.2:1 | Yes (large text only) |

Note: White text on `--primary` buttons meets AA for large text (14px bold = large text per WCAG). Button text is 14px medium (500), which is borderline. If testing fails, increase button font weight to 600 (semibold) or darken button text slightly.

### 8.7 Semantic HTML

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` appropriately.
- Heading hierarchy: one `<h1>` per page, `<h2>` for sections, `<h3>` for subsections. No skipped levels.
- Lists use `<ul>` / `<ol>` / `<li>`, not styled `<div>` elements.
- Tables use `<thead>`, `<tbody>`, `<th scope="col">`.

---

## 9. SEO

### 9.1 Meta Tags (per page)

Every page includes:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{Page Title} | OpenDLT</title>
<meta name="description" content="{Page-specific description, 150-160 chars}">
<meta name="keywords" content="OpenDLT, Accumulate, blockchain, SDK, developer tools, {page-specific keywords}">
<meta name="author" content="OpenDLT">
<link rel="canonical" href="https://opendlt.org/{path}">
```

#### Page Titles and Descriptions

| Page | Title | Description |
|---|---|---|
| Home | OpenDLT -- Open-Source Developer Tools for Accumulate | SDKs in five languages, a browser IDE, local DevNet, and production-grade projects for building on the Accumulate Protocol. |
| Tooling Hub | Developer Tooling \| OpenDLT | SDKs, Accumulate Studio, and local DevNet. Everything you need to build, test, and deploy on Accumulate. |
| SDKs | Accumulate SDKs \| OpenDLT | Multi-language SDKs for the Accumulate Protocol. Python, JavaScript, Rust, Dart, and C# with full protocol coverage. |
| Studio | Accumulate Studio \| OpenDLT | Browser-based IDE for the Accumulate Protocol. Create identities, sign transactions, and inspect the network. No installation required. |
| DevNet | Local DevNet \| OpenDLT | Run a complete Accumulate network on your machine for development and testing. Docker-based, one-command setup. |
| Projects Hub | Projects \| OpenDLT | Open-source infrastructure projects built on Accumulate: Authrix universal DIDs, Infrix WASM smart contracts, Accuboard oracle network. |
| Authrix | Authrix -- Universal DIDs \| OpenDLT | The did:authrix method delivers cross-chain decentralized identity. One DID, every blockchain. Portable, private, sovereign. |
| Infrix | Infrix -- WASM Smart Contracts \| OpenDLT | Write smart contracts in Rust, AssemblyScript, or any WASM-compatible language and deploy to the Accumulate Protocol. |
| Accuboard | Accuboard -- Oracle and Verifiable Compute \| OpenDLT | Bring off-chain data on-chain with cryptographic proofs. Verifiable compute for trustless oracle networks on Accumulate. |
| About | About \| OpenDLT | OpenDLT is the open-source tooling layer for the Accumulate Protocol. Learn about our mission, governance, and how to contribute. |
| Docs | Documentation \| OpenDLT | Guides, API references, and tutorials for OpenDLT SDKs, Accumulate Studio, DevNet, Authrix, Infrix, and Accuboard. |

### 9.2 Open Graph Tags

```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="OpenDLT">
<meta property="og:title" content="{Same as <title>}">
<meta property="og:description" content="{Same as meta description}">
<meta property="og:url" content="https://opendlt.org/{path}">
<meta property="og:image" content="https://opendlt.org/assets/og/og-{page}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

### 9.3 Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@opendlt">
<meta name="twitter:title" content="{Same as <title>}">
<meta name="twitter:description" content="{Same as meta description}">
<meta name="twitter:image" content="https://opendlt.org/assets/og/og-{page}.png">
```

### 9.4 Structured Data (JSON-LD)

Home page includes Organization schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OpenDLT",
  "url": "https://opendlt.org",
  "logo": "https://opendlt.org/assets/icons/opendlt-logo.svg",
  "description": "Open-source developer tools for the Accumulate Protocol.",
  "sameAs": [
    "https://github.com/opendlt",
    "https://twitter.com/opendlt"
  ]
}
</script>
```

SDK pages include SoftwareApplication schema for each SDK.

### 9.5 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://opendlt.org/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://opendlt.org/tooling/</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://opendlt.org/tooling/sdks/</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://opendlt.org/tooling/studio/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://opendlt.org/tooling/devnet/</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://opendlt.org/projects/</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://opendlt.org/projects/authrix/</loc><priority>0.8</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://opendlt.org/projects/infrix/</loc><priority>0.8</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://opendlt.org/projects/accuboard/</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://opendlt.org/about/</loc><priority>0.6</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://opendlt.org/docs/</loc><priority>0.8</priority><changefreq>weekly</changefreq></url>
</urlset>
```

### 9.6 robots.txt

```
User-agent: *
Allow: /
Sitemap: https://opendlt.org/sitemap.xml
```

---

## 10. Performance Budgets

### 10.1 Architecture Constraint

**No build tools.** The site is vanilla HTML, CSS, and JavaScript. There is no webpack, no Vite, no npm build step. Files are authored directly and served by GitHub Pages.

### 10.2 Budgets

| Metric | Budget | Measurement |
|---|---|---|
| First Contentful Paint (FCP) | < 1.5s on 4G | Lighthouse, WebPageTest |
| Largest Contentful Paint (LCP) | < 2.5s on 4G | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| Total page weight (home) | < 500 KB | DevTools Network tab |
| Total page weight (any page) | < 400 KB | DevTools Network tab |
| CSS total | < 60 KB (uncompressed) | File size |
| JavaScript total | < 40 KB (uncompressed) | File size |
| Number of HTTP requests (home) | < 20 | DevTools Network tab |
| Time to Interactive (TTI) | < 3.0s on 4G | Lighthouse |
| Font file size (total) | < 150 KB | File size (WOFF2) |

### 10.3 Font Strategy

```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load fonts with display=swap for fast text rendering -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

- `font-display: swap` ensures text is visible immediately with a fallback system font, then swaps to the custom font once loaded.
- Only load the weights actually used (Inter: 300-800; JetBrains Mono: 400-600).
- Consider self-hosting fonts in Phase 5 for further performance gains and fewer third-party requests.

### 10.4 Image Strategy

- All icons are inline SVG or referenced SVG files (no raster icons).
- Project logos are SVG.
- Screenshots (Studio page) are WebP with JPEG fallback, lazy-loaded.
- OG images are pre-generated 1200x630 PNG files.
- No hero background images; use CSS gradients and subtle canvas/SVG patterns.

### 10.5 CSS Strategy

```
styles/
  main.css         -- Reset, tokens, layout, typography (shared)
  components.css   -- All reusable components (shared)
  animations.css   -- All animation definitions (shared)
  pages/
    home.css       -- Home-specific styles (loaded only on home)
    tooling.css    -- Tooling pages specific styles
    projects.css   -- Project pages specific styles
```

- Shared CSS is loaded on every page (~40 KB).
- Page-specific CSS is loaded only on relevant pages (~5-15 KB each).
- No CSS preprocessors. Use CSS custom properties for theming.

### 10.6 JavaScript Strategy

```
scripts/
  main.js          -- AOS, nav, tabs, copy-to-clipboard, loading screen
  prism-minimal.js -- Syntax highlighting (loaded async, deferred)
```

- All scripts use `defer` attribute.
- Prism.js is loaded only on pages with code blocks.
- No framework, no jQuery, no module bundler.
- Total JS budget: < 40 KB uncompressed.

---

## 11. Implementation Phases

### Phase 1: Foundation (Week 1)

**Goal:** Establish the design system, shared layout, and navigation.

**Deliverables:**
- [ ] CSS custom properties file with all design tokens
- [ ] Reset / normalize styles
- [ ] Typography scale implementation
- [ ] Shared navigation component (desktop + mobile + dropdowns)
- [ ] Shared footer component
- [ ] Skip link implementation
- [ ] HTML template (shared `<head>`, meta tags, font loading)
- [ ] Loading screen component
- [ ] `robots.txt` and `sitemap.xml`

**Exit criteria:** A blank page loads with working nav, footer, and correct fonts. Mobile hamburger works. Skip link is functional. All design tokens are defined and accessible via CSS custom properties.

---

### Phase 2: Home Page (Week 2)

**Goal:** Build the complete home page -- the primary entry point for all visitors.

**Deliverables:**
- [ ] Hero section with headline, subheadline, badge, and two CTAs
- [ ] Hero background (CSS gradient / subtle grid animation)
- [ ] Tooling highlights card row (3 cards)
- [ ] Projects showcase card row (3 cards with progress bars and badges)
- [ ] Quick-start tabbed code block (all 5 languages)
- [ ] Stats bar
- [ ] AOS scroll reveal for all sections
- [ ] Responsive layout for all breakpoints

**Exit criteria:** Home page matches spec. All CTAs link to correct destinations. Tabbed code block switches languages. Progress bars animate on scroll. Page weight < 500 KB. Lighthouse accessibility score >= 90.

---

### Phase 3: Tooling Pages (Week 3)

**Goal:** Build the Tooling Hub, SDKs, Studio, and DevNet pages.

**Deliverables:**
- [ ] Tooling Hub (`/tooling/index.html`) with three feature sections
- [ ] SDKs page (`/tooling/sdks/index.html`) with 5-tab interface
- [ ] Copy-to-clipboard for install commands
- [ ] Studio page (`/tooling/studio/index.html`) with feature grid
- [ ] DevNet page (`/tooling/devnet/index.html`) with setup guide
- [ ] Code block component with syntax highlighting (Prism.js)
- [ ] Breadcrumb navigation on sub-pages

**Exit criteria:** All four tooling pages are complete. Tab interface is keyboard-accessible. Copy-to-clipboard works. Code blocks have syntax highlighting. All links resolve correctly.

---

### Phase 4: Project Pages (Week 4)

**Goal:** Build the Projects Hub, Authrix, Infrix, and Accuboard pages.

**Deliverables:**
- [ ] Projects Hub (`/projects/index.html`) with three project cards
- [ ] Authrix page (`/projects/authrix/index.html`) with full content
- [ ] Infrix page (`/projects/infrix/index.html`) with full content
- [ ] Accuboard page (`/projects/accuboard/index.html`) with full content
- [ ] Status badges (Alpha, Beta, Concept) component
- [ ] Progress bar component with scroll-triggered animation
- [ ] Roadmap table component
- [ ] All "Lattica" references replaced with "Authrix" across the codebase

**Exit criteria:** All four project pages are complete. Progress bars animate correctly. Status badges display correct states. No references to "Lattica" remain anywhere in the codebase.

---

### Phase 5: About and Docs (Week 5)

**Goal:** Build the About and Docs pages. Finalize cross-page consistency.

**Deliverables:**
- [ ] About page (`/about/index.html`) with mission, governance, contributing
- [ ] Docs page (`/docs/index.html`) with documentation card grid
- [ ] Cross-page link audit (verify every internal link resolves)
- [ ] Consistent header/footer across all 11 pages
- [ ] Self-hosted fonts (move off Google Fonts CDN if performance allows)

**Exit criteria:** All 11 pages are built and internally consistent. Every link works. No 404s. Footer is identical across all pages.

---

### Phase 6: Polish and Optimization (Week 6)

**Goal:** Optimize performance, finalize animations, and complete accessibility audit.

**Deliverables:**
- [ ] Lighthouse audit: all pages score >= 90 on Performance, Accessibility, Best Practices, SEO
- [ ] axe-core accessibility scan: zero critical or serious issues
- [ ] Keyboard navigation audit: every interactive element is reachable and operable
- [ ] Reduced motion testing: all animations disabled, all content visible
- [ ] Cross-browser testing: Chrome, Firefox, Safari, Edge (latest 2 versions)
- [ ] Mobile testing: iOS Safari, Android Chrome
- [ ] OG images generated for all 11 pages
- [ ] Performance budget validation: all metrics within budget
- [ ] CSS cleanup: remove unused styles, consolidate duplicates
- [ ] JavaScript cleanup: remove unused code, minimize file size

**Exit criteria:** All Lighthouse scores >= 90. Zero accessibility violations. All performance budgets met. Cross-browser and mobile testing pass.

---

### Phase 7: Launch (Week 7)

**Goal:** Deploy to production and verify live site.

**Deliverables:**
- [ ] Final content review: all copy proofread, all code examples tested
- [ ] DNS / CNAME verification (`opendlt.org` pointing to GitHub Pages)
- [ ] HTTPS enforcement via GitHub Pages settings
- [ ] `sitemap.xml` submitted to Google Search Console
- [ ] OG tag testing with Facebook Sharing Debugger and Twitter Card Validator
- [ ] Analytics setup (privacy-respecting: Plausible or Fathom, not Google Analytics)
- [ ] Redirect old `/projects/lattica/` to `/projects/authrix/` (via 404.html or JS redirect)
- [ ] Launch announcement prepared (GitHub, Twitter, Discord)
- [ ] Post-launch monitoring: check for 404s, broken links, performance regressions

**Exit criteria:** Site is live at `opendlt.org`. All 11 pages load correctly. HTTPS works. Sitemap is indexed. OG tags render correctly on social platforms. No broken links. Analytics is recording visits.

---

## 12. Risks and Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | **No build tools limits CSS/JS organization** -- as the site grows, managing raw CSS and JS across 11 pages becomes harder. | High | Medium | Use strict CSS custom properties for consistency. Keep page-specific styles in separate files. Document naming conventions. Consider migrating to a build tool in future if site exceeds 20 pages. |
| 2 | **Google Fonts CDN outage or latency** -- reliance on third-party font CDN introduces a single point of failure. | Low | Medium | Use `font-display: swap` so text is always visible. Phase 5 includes self-hosting fonts as a fallback. System font stack in CSS custom property provides graceful degradation. |
| 3 | **Prism.js adds weight and complexity** -- syntax highlighting library may exceed JS budget. | Medium | Low | Use Prism.js minimal build with only the 5 needed language grammars. Load async with `defer`. If over budget, fall back to styled `<pre><code>` without highlighting. |
| 4 | **Lattica-to-Authrix rename incomplete** -- existing links, bookmarks, and search engine results point to `/projects/lattica/`. | High | High | Implement redirect from `/projects/lattica/` to `/projects/authrix/`. Use `grep -r "lattica"` across the entire codebase as a Phase 4 exit check. Add automated link-checking in CI if possible. |
| 5 | **Accessibility regressions during development** -- developers may introduce accessibility issues during rapid iteration. | Medium | High | Run axe-core after each phase. Include accessibility checks in the acceptance criteria for every phase. Use `eslint-plugin-jsx-a11y` patterns as a mental checklist (even though this is vanilla HTML). |
| 6 | **Mobile nav complexity** -- dropdown menus, accordion sub-menus, and focus trapping on mobile add significant JS complexity. | Medium | Medium | Build mobile nav as a standalone, well-tested module. Test on real devices (not just DevTools emulation). Keep the mobile menu structure flat: max one level of nesting. |
| 7 | **OG images for 11 pages** -- generating and maintaining per-page social sharing images is tedious. | Low | Low | Use a simple template (OpenDLT logo + page title on `--darker` background). Generate with a script or free tool (e.g., Figma template, og-image service). Revisit only if social sharing becomes a priority. |
| 8 | **SDK code examples become stale** -- SDKs may change their API, making website code examples incorrect. | Medium | High | Pin code examples to specific SDK versions. Add a visible version number next to each code example. Include a link to the SDK changelog. Schedule quarterly reviews of all code examples. |
| 9 | **GitHub Pages limitations** -- no server-side redirects, no custom headers, limited 404 handling. | Medium | Medium | Use a custom `404.html` page that includes JavaScript-based redirects for known moved pages. Use `<meta http-equiv="refresh">` as a fallback. Document all redirects in a central place. |
| 10 | **Content drift between plan and implementation** -- copy blocks in this document may diverge from what is actually implemented. | High | Low | Treat this document as the source of truth during implementation. Update it if approved changes are made. Conduct a final content audit in Phase 6 comparing live pages to this spec. |
| 11 | **Progress percentages become stale** -- Authrix ~72%, Infrix ~60%, Accuboard ~25% are point-in-time estimates. | High | Low | Display progress as approximate ranges, not exact numbers. Update quarterly or tie to GitHub milestone completion percentages if available. |
| 12 | **Cross-browser animation inconsistencies** -- IntersectionObserver and CSS transitions may behave differently across browsers. | Low | Medium | IntersectionObserver has > 97% browser support. Test animations in Chrome, Firefox, Safari, and Edge. Provide CSS-only fallback (elements visible by default) for any browser without IntersectionObserver. |

---

## 13. Acceptance Criteria

### Global Criteria (all pages)

- [ ] **WCAG AA compliance:** Zero critical or serious axe-core violations.
- [ ] **Keyboard navigability:** Every interactive element is reachable via Tab and operable via Enter/Space. Escape closes overlays. Arrow keys work in tab components and dropdown menus.
- [ ] **Skip link:** Present and functional on every page.
- [ ] **Focus styles:** Visible on every focusable element when using keyboard navigation. Hidden for mouse users via `:focus-visible`.
- [ ] **Reduced motion:** All animations are disabled when `prefers-reduced-motion: reduce` is active. All content remains visible and functional.
- [ ] **Responsive:** Every page renders correctly at 320px, 768px, 1024px, and 1440px widths.
- [ ] **Navigation:** Desktop dropdowns work. Mobile hamburger opens/closes. All links resolve. "Open Studio" CTA is always visible.
- [ ] **Footer:** Identical across all 11 pages. All links work.
- [ ] **Meta tags:** Every page has unique `<title>`, `<meta description>`, OG tags, and Twitter Card tags.
- [ ] **Canonical URL:** Every page has a `<link rel="canonical">` tag.
- [ ] **No Lattica references:** `grep -ri "lattica" .` returns zero results (excluding `lattica-site/` legacy directory if retained for redirect purposes).
- [ ] **Performance:** Lighthouse Performance score >= 90 on every page. LCP < 2.5s. CLS < 0.1.
- [ ] **Cross-browser:** Chrome, Firefox, Safari, Edge (latest 2 versions) render correctly.
- [ ] **HTTPS:** Site loads over HTTPS with no mixed content warnings.
- [ ] **404 page:** Custom 404 page exists and provides helpful navigation.

### Page-Specific Criteria

#### Home
- [ ] Hero loads within 1.5s FCP. Badge, headline, subheadline, and both CTAs visible above the fold.
- [ ] "Open Accumulate Studio" links to `https://studio.opendlt.org` (opens in new tab).
- [ ] "Pick an SDK" scrolls or navigates to the SDK section/page.
- [ ] Three tooling cards render with icons, titles, descriptions, and links.
- [ ] Three project cards render with logos, badges, progress bars, descriptions, and links.
- [ ] Tabbed code block shows all five languages. Tab switching is smooth and keyboard-accessible.
- [ ] Stats bar displays correct numbers.
- [ ] AOS animations trigger on scroll (and are disabled under reduced motion).

#### Tooling Hub
- [ ] Three feature sections (SDKs, Studio, DevNet) with correct copy and links.
- [ ] SDK table shows all five languages with install commands and status.

#### SDKs
- [ ] Five-tab interface with Python, JavaScript, Rust, Dart, C#.
- [ ] Each tab displays: description, install command (with copy button), code example, feature list, links.
- [ ] Tabs are keyboard-accessible (Arrow keys, Enter/Space).
- [ ] Copy-to-clipboard shows visual confirmation.

#### Studio
- [ ] Primary CTA links to `https://studio.opendlt.org`.
- [ ] Feature grid (6 features) renders correctly.
- [ ] Screenshot displays correctly (lazy-loaded).

#### DevNet
- [ ] Prerequisites section is clear.
- [ ] Setup steps include copy-to-clipboard for commands.
- [ ] Troubleshooting section is present.

#### Projects Hub
- [ ] Three project cards with: logo, name, tagline, status badge, progress bar, description, tags, links.
- [ ] Progress bars animate on scroll.
- [ ] Status badges show correct state (Alpha, Beta, Concept).

#### Authrix
- [ ] Status: Alpha, Progress: ~72%.
- [ ] DID method shown as `did:authrix` (not `did:lattica`).
- [ ] Problem/solution narrative is present.
- [ ] Roadmap table is present.
- [ ] Code example uses `authrix` package name.

#### Infrix
- [ ] Status: Beta, Progress: ~60%.
- [ ] Example smart contract code block is present.
- [ ] Roadmap table is present.

#### Accuboard
- [ ] Status: Concept, Progress: ~25%.
- [ ] "Join the Discussion" CTA is present.
- [ ] Use cases section is present.
- [ ] Clear communication that this is early-stage.

#### About
- [ ] Mission statement is present.
- [ ] Accumulate Protocol relationship is explained.
- [ ] Governance section is present.
- [ ] Contributing section with links to GitHub and Code of Conduct.

#### Docs
- [ ] Documentation card grid renders with all 8 categories.
- [ ] Links resolve to correct destinations (or placeholder pages).
- [ ] External link to Accumulate Protocol docs is clearly marked as external.

---

## Appendix A: File Structure (Post-Redesign)

```
opendlt-site/
|
+-- index.html                         # Home page
+-- favicon.ico                        # Favicon
+-- robots.txt                         # Search engine directives
+-- sitemap.xml                        # Sitemap for search engines
+-- CNAME                              # GitHub Pages custom domain
+-- 404.html                           # Custom 404 page
+-- LICENSE                            # MIT License
+-- README.md                          # Repository documentation
+-- PLAN_WEBSITE_REDESIGN.md           # This document
|
+-- styles/
|   +-- main.css                       # Design tokens, reset, layout, typography
|   +-- components.css                 # Reusable component styles
|   +-- animations.css                 # Animation definitions
|   +-- pages/
|       +-- home.css                   # Home page specific styles
|       +-- tooling.css                # Tooling pages styles
|       +-- projects.css               # Project pages styles
|       +-- about.css                  # About page styles
|       +-- docs.css                   # Docs page styles
|
+-- scripts/
|   +-- main.js                        # AOS, nav, tabs, copy, loading
|   +-- prism-minimal.js              # Syntax highlighting (async)
|
+-- assets/
|   +-- icons/
|   |   +-- opendlt-logo.svg           # OpenDLT logo
|   |   +-- github.svg                 # GitHub icon
|   |   +-- twitter.svg                # Twitter/X icon
|   |   +-- discord.svg                # Discord icon
|   |   +-- copy.svg                   # Copy-to-clipboard icon
|   |   +-- chevron-down.svg           # Dropdown chevron
|   |   +-- menu.svg                   # Hamburger menu icon
|   |   +-- external-link.svg          # External link indicator
|   |   +-- terminal.svg               # Terminal icon (tooling card)
|   |   +-- browser.svg                # Browser icon (studio card)
|   |   +-- server.svg                 # Server icon (devnet card)
|   |   +-- book.svg                   # Book icon (docs)
|   |   +-- shield.svg                 # Shield icon (authrix)
|   |   +-- cpu.svg                    # CPU icon (infrix)
|   |   +-- database.svg               # Database icon (accuboard)
|   |
|   +-- langs/
|   |   +-- python.svg                 # Python language icon
|   |   +-- javascript.svg             # JavaScript language icon
|   |   +-- rust.svg                   # Rust language icon
|   |   +-- dart.svg                   # Dart language icon
|   |   +-- csharp.svg                 # C# language icon
|   |
|   +-- projects/
|   |   +-- authrix-logo.svg           # Authrix project logo
|   |   +-- infrix-logo.svg            # Infrix project logo
|   |   +-- accuboard-logo.svg         # Accuboard project logo
|   |
|   +-- og/
|   |   +-- og-home.png                # OG image: home
|   |   +-- og-tooling.png             # OG image: tooling hub
|   |   +-- og-sdks.png                # OG image: SDKs
|   |   +-- og-studio.png              # OG image: studio
|   |   +-- og-devnet.png              # OG image: devnet
|   |   +-- og-projects.png            # OG image: projects hub
|   |   +-- og-authrix.png             # OG image: authrix
|   |   +-- og-infrix.png              # OG image: infrix
|   |   +-- og-accuboard.png           # OG image: accuboard
|   |   +-- og-about.png               # OG image: about
|   |   +-- og-docs.png                # OG image: docs
|   |
|   +-- screenshots/
|       +-- studio-identity.webp       # Studio screenshot (identity view)
|       +-- studio-identity.jpg        # Studio screenshot (JPEG fallback)
|
+-- tooling/
|   +-- index.html                     # Tooling Hub page
|   +-- sdks/
|   |   +-- index.html                 # SDKs page
|   +-- studio/
|   |   +-- index.html                 # Studio page
|   +-- devnet/
|       +-- index.html                 # DevNet page
|
+-- projects/
|   +-- index.html                     # Projects Hub page
|   +-- authrix/
|   |   +-- index.html                 # Authrix page
|   +-- infrix/
|   |   +-- index.html                 # Infrix page
|   +-- accuboard/
|       +-- index.html                 # Accuboard page
|
+-- about/
|   +-- index.html                     # About page
|
+-- docs/
|   +-- index.html                     # Docs page
|
+-- includes/                          # Shared HTML partials (optional, for dev convenience)
|   +-- head.html                      # Shared <head> content
|   +-- nav.html                       # Shared navigation
|   +-- footer.html                    # Shared footer
```

---

## Appendix B: Migration Checklist (Lattica to Authrix)

All of the following must be completed before Phase 4 exit:

- [ ] Rename `/projects/lattica/` directory to `/projects/authrix/`
- [ ] Update all HTML files: replace "Lattica" with "Authrix" in visible text
- [ ] Update all HTML files: replace "lattica" with "authrix" in URLs, file paths, and CSS classes
- [ ] Update all HTML files: replace "did:lattica" with "did:authrix"
- [ ] Rename `assets/projects/lattica-logo.svg` to `assets/projects/authrix-logo.svg`
- [ ] Update all image `src` attributes referencing the old logo filename
- [ ] Create redirect: `/projects/lattica/` -> `/projects/authrix/` (via meta refresh or JS in a stub `index.html`)
- [ ] Update `sitemap.xml` to reference `/projects/authrix/`
- [ ] Run `grep -ri "lattica"` across the entire repository and resolve every result
- [ ] Update OG images if they contain the Lattica name

---

*End of document.*
