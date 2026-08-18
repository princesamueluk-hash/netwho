#!/bin/bash

echo "==================================================="
echo "NETWHO ADVERTISEMENT SYSTEM - INTEGRATION REPORT"
echo "==================================================="
echo ""

# Check all real external ad configurations
echo "✓ AD 1 Configuration (Container-based):"
echo "  - Container ID: container-487b249ab83f6aa8203efe13fa4ee6d6"
echo "  - Source: https://pl30885739.effectivecpmnetwork.com/487b249ab83f6aa8203efe13fa4ee6d6/invoke.js"
echo "  - Manager: AdSlot.tsx & ExternalAdsContainer.tsx"
grep -q "container-487b249ab83f6aa8203efe13fa4ee6d6" src/components/AdSlot.tsx && echo "  - Status: ✓ CONFIGURED" || echo "  - Status: ✗ MISSING"
echo ""

echo "✓ AD 2 Configuration (Script-based):"
echo "  - Source: https://pl30885738.effectivecpmnetwork.com/50/b6/fc/50b6fc8dcb4d46f0e4ec4f7a48984c97.js"
echo "  - Manager: ScriptAdsManager.tsx"
grep -q "50b6fc8dcb4d46f0e4ec4f7a48984c97" src/components/ScriptAdsManager.tsx && echo "  - Status: ✓ CONFIGURED" || echo "  - Status: ✗ MISSING"
echo ""

echo "✓ AD 3 Configuration (Script-based):"
echo "  - Source: https://pl30885741.effectivecpmnetwork.com/d8/e7/66/d8e7667a985e60d3761ebb99b34e858b.js"
echo "  - Manager: ScriptAdsManager.tsx"
grep -q "d8e7667a985e60d3761ebb99b34e858b" src/components/ScriptAdsManager.tsx && echo "  - Status: ✓ CONFIGURED" || echo "  - Status: ✗ MISSING"
echo ""

echo "==================================================="
echo "CHECK NO FAKE ADS EXIST IN CODEBASE"
echo "==================================================="
if grep -rn "NETWHO Premium — Advanced Threat Detection" src/; then
  echo "✗ FAKE ADS FOUND"
else
  echo "✓ No fake NETWHO Premium ads found"
fi
echo ""

echo "==================================================="
echo "BUILD STATUS"
echo "==================================================="
if npm run lint > /tmp/lint.log 2>&1; then
  echo "✓ TypeScript Compilation: PASSED"
else
  echo "✗ TypeScript Compilation: FAILED"
  cat /tmp/lint.log
fi
echo ""
